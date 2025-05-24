import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../services/worker.service.js";
import { PrismaClient } from "../../generated/index.js";
import { CreateWorkerDTO, LoginWorkerDTO } from "../dto/worker.dto.js";

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
    async FindAllWorkers(request: FastifyRequest, reply: FastifyReply) {
        const {take, skip} = request.params as {take: string, skip: number}
        try {
            const workers = await this.workerService.FindAllWorkers(Number(skip), Number(take))
            return workers
        } catch (error) {
            throw error
        }
    }
    async LoginWorker(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as LoginWorkerDTO
        try {
            const jwt = await this.workerService.LoginWorker(body)
            return jwt
        } catch (error) {
            throw error
        }
    }
}