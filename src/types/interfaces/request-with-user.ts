import { FastifyRequest } from "fastify";
import { IPayload } from "./payload.js";

export interface IRequestWithUser extends FastifyRequest {
    user: IPayload
}