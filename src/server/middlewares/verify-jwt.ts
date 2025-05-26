import { FastifyReply, FastifyRequest } from "fastify";
import { JWT } from "../../crypto/jwt.js";
import { IRequestWithUser } from "../../types/interfaces/request-with-user.js";

export async function verifyJWT(req: FastifyRequest, reply: FastifyReply) {
    const url = req.url
    if (url.includes("/login")) {
        return 
    }

    try {
        if (!req.headers.authorization) {
            throw new Error()
        }
        const payload = await JWT.VerifyJWT(req.headers.authorization);

        (req as IRequestWithUser).user = payload;
    } catch (error) {
        reply.code(401).send({error: "jwt is invalid"})
    }
}