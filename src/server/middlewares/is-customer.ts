import { FastifyReply, FastifyRequest } from "fastify";


export async function isCustomer(request: FastifyRequest, reply: FastifyReply) {
    const user = request.user
    if (user.role !== "CUSTOMER") {
        return reply.status(403).send({error: "you are not a customer"})
    }
}