import { FastifyInstance } from "fastify";
import { PrismaClient } from "../../generated/client.js";
import { CreateSchedulingDTO, UpdateSchedulingStatusDTO } from "../dto/scheduling.dto.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { WorkerService } from "./worker.service.js";
import { ServiceService } from "./service.service.js";
import { PetService } from "./pet.service.js";

export class SchedulingService {
    private schedulingModel
    private workerService!: WorkerService
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient,  
        private readonly serviceService: ServiceService, private readonly petService: PetService
    ) {
        this.schedulingModel = prisma.scheduling
    }
    SetWorkerService(workerService: WorkerService) {
        this.workerService = workerService
    }
    async CreateScheduling(body: CreateSchedulingDTO) {
        const errors = await validate(plainToInstance(CreateSchedulingDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        
        await Promise.all(body.workersIds.map(id => this.workerService.FindWorkerById(id)))
        await this.serviceService.FindOneService(body.serviceID)
        await this.petService.FindOnePet(body.petID)
        const scheduling = await this.schedulingModel.create({
            data: {
                date: new Date(body.date),
                service: {
                    connect: {id: body.serviceID}
                },
                pet: {
                    connect: {id: body.petID}
                },
                status: "SCHEDULED",
                workers: {
                    create: body.workersIds.map(id => {
                        return {worker: {connect: {id}}}
                    })
                }
            },
        })
        return {
            message: "scheduling was created",
            id: scheduling.id
        }
    }
    async FindAllSchedulings(skip: number, take: number) {
        const schedulings = await this.schedulingModel.findMany({skip, take, include: {
            pet: true,
            service: true,
            workers: true
        }})
        return schedulings
    }
    async FindOneSchedulingById(id: string) {
        const scheduling =  await this.schedulingModel.findFirst({where:{id}, include: {
            pet: true,
            service: true,
            workers: true
        }})
        if (!scheduling) {
            throw this.app.httpErrors.notFound("scheduling was not found")
        }
        return scheduling
    }
    async UpdateSchedulingStatus(body: UpdateSchedulingStatusDTO, id: string) {
        await this.FindOneSchedulingById(id)
        await this.schedulingModel.update({where:{id}, data: {status: body.status}})
        return {
            message: "scheduling status was updated"
        }
    }
    async GetValueOfSchedulings(month: number, year: number) {
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfNextMonth = new Date(year, month + 1, 1);
        const filter = {
            createdAt: {
                gte: firstDayOfMonth,
                lt: firstDayOfNextMonth
            }
        }
        const schedulings = await this.schedulingModel.findMany({where: filter, include: {service: true}})
        let revenue: number = 0
        revenue = schedulings.reduce(((totalValue, accurentValue) => totalValue += accurentValue.service.price), 0)
        return revenue
    }
}
