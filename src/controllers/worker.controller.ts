import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../services/worker.service.js";
import { PrismaClient } from "../../generated/index.js";
import { CreateWorkerDTO,  UpdateWorkerDTO } from "../dto/worker.dto.js";
import { LoginDTO } from "../dto/login.dto.js";

export class WorkerController {
    private workerService: WorkerService
    constructor(app: FastifyInstance, prisma: PrismaClient) {
        this.workerService = new WorkerService(app, prisma)
    }
    async CreateWorker(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateWorkerDTO
        try {
            const message = await this.workerService.CreateWorker(body)
            return reply.status(201).send(message)
        } catch (error) {
            throw error
        }
    }
    async FindAllWorkers(request: FastifyRequest, reply: FastifyReply) {
        const {take, skip} = request.params as {take: string, skip: number}
        try {
            const workers = await this.workerService.FindAllWorkers(Number(skip), Number(take))
            return reply.status(200).send(workers)
        } catch (error) {
            throw error
        }
    }
    async LoginWorker(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as LoginDTO
        try {
            const jwt = await this.workerService.LoginWorker(body)
            return reply.status(200).send(jwt)
        } catch (error) {
            throw error
        }
    }
    async DeleteOneWorkerByEmail(request: FastifyRequest, reply: FastifyReply) {
        const {email}  = request.params as {email: string}
        try {
            const message = await this.workerService.DeleteWorkerByEmail(email)
            return  reply.status(200).send(message)
        } catch (error) {
            throw error
        }
    }
    async UpdateOneWorkerByEmail(request: FastifyRequest, reply: FastifyReply) {
        const {email}  = request.params as {email: string}
        const body = request.body as UpdateWorkerDTO
        try {
            const message = await this.workerService.UpdateWorkerByEmail(body, email)
            return reply.status(200).send(message)
        } catch (error) {
            throw error
        }
    }
    async FindOneWorkerByEmail(request: FastifyRequest, reply: FastifyReply) {
        const {email}  = request.params as {email: string}
        try {
            const worker = await this.workerService.FindWorkerByEmail(email)
            return reply.status(200).send(worker)
        } catch (error) {
            throw error
        }
    }
}