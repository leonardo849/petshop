import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../services/worker.service.js";
import { PrismaClient } from "../../generated/index.js";
import { CreateWorkerDTO } from "../dto/worker.dto.js";

export class WorkerController {
    private workerService: WorkerService
    constructor(app: FastifyInstance, prisma: PrismaClient) {
        this.workerService = new WorkerService(app, prisma)
    }
    async CreateWorker(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateWorkerDTO
        try {
            const message = await this.workerService.CreateWorker(body)
            return message
        } catch (error) {
            throw error
        }
    }
}