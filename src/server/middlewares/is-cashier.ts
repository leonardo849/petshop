import { FastifyReply, FastifyRequest } from "fastify";

export async function isCashier(request: FastifyRequest, reply: FastifyReply) {
    if (request.user.role !== "CASHIER") {
        return reply.status(403).send({error: "you aren't cashier"})
    }
}