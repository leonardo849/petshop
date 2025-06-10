import { CreateServiceDTO, UpdateServiceDTO } from "../dto/service.dto.js";
import { PrismaClient } from "../../generated"
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { FastifyInstance } from "fastify";

export class ServiceService {
    private serviceModel
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient, ) {
        this.serviceModel = prisma.service
    }
    async CreateService(body: CreateServiceDTO) {
        const errors = await validate(plainToInstance(CreateServiceDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        body.name = body.name.toUpperCase()
        const service = await this.serviceModel.create({data: body})
        return {
            message: "your service was created",
            id: service.id
        }
    }
    async FindOneService(id: string) {
        const service =  await this.serviceModel.findFirst({where:{id}})
        if (!service) {
            throw this.app.httpErrors.notFound("service not found")
        }
        return service
    }
    async FindAllServices() {
        const services = await this.serviceModel.findMany()
        return services
    }
    async UpdateServiceByID(body: UpdateServiceDTO, id: string) {
        const errors = await validate(plainToInstance(UpdateServiceDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        await this.serviceModel.update({where:{id}, data: body})
        return {
            message: "service was updated"
        }
    }
}