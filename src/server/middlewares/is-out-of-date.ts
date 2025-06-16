import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "../../../generated";


export async function isOutOfDate(request: FastifyRequest, reply: FastifyReply, app: FastifyInstance,  prisma: PrismaClient) {
    const {email} = request.params as {email: string}
    let updatedAt: Date|undefined
    if (request.user.role === "CUSTOMER") {
        const customer = await prisma.customer.findFirst({where:{email}})
        if (customer) {
            updatedAt = customer.updatedAt
        }
    } else {
        const worker = await prisma.worker.findFirst({where:{email}})
        if (worker) {
            updatedAt = worker.updatedAt
        }
    }
    
    if (updatedAt && updatedAt > new Date()) {
        return reply.status(403).send({error: "your login is out of date"})
    }
}