import { ServiceService } from "../services/service.service.js";
import { PrismaClient } from "../../generated";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateServiceDTO, UpdateServiceDTO } from "../dto/service.dto.js";

export class ServiceController {
    private serviceService: ServiceService
    constructor(prisma: PrismaClient, app: FastifyInstance) {
        this.serviceService = new ServiceService(app, prisma)
    }
    async CreateService(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateServiceDTO
        try {
            const message = await this.serviceService.CreateService(body)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindAllServices(request: FastifyRequest, reply: FastifyReply) {
        try {
            const services = await this.serviceService.FindAllServices()
            return services
        } catch (error) {
            throw error
        }
    }
    async UpdateService(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        const body = request.body as UpdateServiceDTO
        try {
            const message = await this.serviceService.UpdateServiceByID(body, id)
            return message
        } catch (error) {
            throw error
        }
    }
}