import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { WorkerService } from "../../services/worker.service.js";
import { PrismaClient } from "../../../generated";
import { CustomerService } from "../../services/customer.service.js";

export async function isOutOfDate(request: FastifyRequest, reply: FastifyReply, app: FastifyInstance,  prisma: PrismaClient) {
    const {email} = request.params as {email: string}
    let updatedAt: Date|undefined
    const url = request.url
    if (url.includes("/login")) {
        return 
    }
    if (request.user.role === "CUSTOMER") {
        const customerService = new CustomerService(app, prisma)
        const customer = await customerService.FindOneCustomerByEmail(email)
        if (customer) {
            updatedAt = customer.updatedAt
        }
    } else {
        const workerService = new WorkerService(app, prisma)
        const worker = await workerService.FindWorkerByEmail(email)
        if (worker) {
            updatedAt = worker.updatedAt
        }
    }
    
    if (updatedAt && updatedAt > new Date()) {
        return reply.status(403).send({error: "your login is out of date"})
    }
}