import { FastifyReply, FastifyRequest } from "fastify";

export async function isSameEmail(request: FastifyRequest, reply: FastifyReply) {
    const {email} = request.params as {email: string}
    if (email !== request.user.email) {
        return request.user.role === "MANAGER" ? true : reply.status(403).send({error: "you are not manager"})
    } 
}