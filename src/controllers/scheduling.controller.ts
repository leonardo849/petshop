import { SchedulingService } from "../services/scheduling.service.js";
import { PrismaClient } from "../../generated/client.js";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../services/worker.service.js";
import { ServiceService } from "../services/service.service.js";
import { PetService } from "../services/pet.service.js";
import { CustomerService } from "../services/customer.service.js";
import { CreateSchedulingDTO, UpdateSchedulingStatusDTO } from "../dto/scheduling.dto";
import { ProductService } from "../services/product.service.js";
import { PurchaseService } from "../services/purchase.service.js";

export class SchedulingController {
    private schedulingService: SchedulingService
    constructor(app: FastifyInstance, prisma: PrismaClient) {
        const productService: ProductService = new ProductService(prisma, app)
        const purchaseService =  new PurchaseService(prisma, app, productService)
        const serviceService = new ServiceService(app, prisma)
        const customerService = new CustomerService(app, prisma)
        const petService = new PetService(prisma, app, customerService)
        this.schedulingService = new SchedulingService(app, prisma, serviceService, petService)
        const workerService = new WorkerService(app, prisma, purchaseService)
        this.schedulingService.SetWorkerService(workerService)
        workerService.SetSchedulingService(this.schedulingService)
    }
    async CreateScheduling(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateSchedulingDTO
        try {
            const message = await this.schedulingService.CreateScheduling(body)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindAllSchedulings(request: FastifyRequest, reply: FastifyReply) {
        const {take, skip} = request.params as {take: number, skip: number}
        try {
            const schedulings = await this.schedulingService.FindAllSchedulings(Number(skip), Number(take))
            return schedulings
        } catch (error) {
            throw error
        }
    }
    async FindOneScheduling(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        try {
            const scheduling = await this.schedulingService.FindOneSchedulingById(id)
            return scheduling
        } catch (error) {
            throw error
        }
    }
    async UpdateOneScheduling(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        const body = request.body as UpdateSchedulingStatusDTO
        try {
            const message = await this.schedulingService.UpdateSchedulingStatus(body, id)
            return message
        } catch (error) {
            throw error
        }
    }
}