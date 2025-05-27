import { FastifyReply, FastifyRequest } from "fastify";


export async function isManager(request: FastifyRequest, reply: FastifyReply) {
    const user = request.user
    if (user.role !== "MANAGER") {
        return reply.status(403).send({error: "you are not a manager"})
    }
}