import { CreateServiceDTO } from "../dto/service.dto";
import { PrismaClient } from "../../generated";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { FastifyInstance } from "fastify";

export class ServiceService {
    private serviceModel
    constructor(prisma: PrismaClient, private readonly app: FastifyInstance) {
        this.serviceModel = prisma.service
    }
    async CreateService(body: CreateServiceDTO) {
        const errors = await validate(plainToInstance(CreateServiceDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const service = await this.serviceModel.create({data: body})
        return {
            message: "your service was created",
            id: service.id
        }
    }
}