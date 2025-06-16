import { FastifyReply, FastifyRequest } from "fastify";

export function checkException(request: FastifyRequest) {
    const url = request.url
    return url.includes("/login") || url.includes("/customer/create") || url.includes("/product/all") 
    || url.includes("/product/one")
}