import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../../services/worker.service.js";
import { PrismaClient } from "../../../generated";

export async function isOutOfDate(request: FastifyRequest, reply: FastifyReply, app: FastifyInstance,  prisma: PrismaClient) {
    const {email} = request.params as {email: string}
    const workerService = new WorkerService(app, prisma)
    const worker = await workerService.FindWorkerByEmail(email)
    if (worker.updatedAt > new Date()) {
        return reply.status(403).send({error: "your login is out of date"})
    }
}