import 'fastify';
import { IPayload } from "../interfaces/payload" 

declare module 'fastify' {
  interface FastifyRequest {
    user: IPayload;
  }
}
