import { FastifyReply, FastifyRequest } from "fastify";
import { JWT } from "../../crypto/jwt.js";
import { IRequestWithUser } from "../../types/interfaces/request-with-user.js";

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
    const url = request.url
    if (url.includes("/login")) {
        return 
    }

    try {
        if (!request.headers.authorization) {
            throw new Error()
        }
        const payload = await JWT.VerifyJWT(request.headers.authorization);

        request.user = payload;
    } catch (error) {
        reply.code(401).send({error: "jwt is invalid"})
    }
}