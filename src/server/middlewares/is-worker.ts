import { FastifyReply, FastifyRequest } from "fastify";

export async function isWorker(request: FastifyRequest, reply: FastifyReply) {
    const user = request.user
    if (user.role === "CUSTOMER") {
        return await reply.status(403).send({message: "you are not a worker"})
    }
}