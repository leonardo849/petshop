import { httpErrors } from "@fastify/sensible";
import { FastifyInstance } from "fastify";
import { HttpError } from "@fastify/sensible";

export class Server {
    constructor(private readonly app: FastifyInstance) {

    }
    async RunServer(port: number) {
        try {
            await this.app.listen({host: "0.0.0.0", port: port})
            console.log(`server is running on port ${port}`)
        } catch (error) {

        }
    }
    private async SetupRoutes() {
        this.SetErrorHandler()
    }
    private SetErrorHandler() {
       this.app.setErrorHandler((error, request, reply) => {
            if (error instanceof HttpError) {
                reply.status(error.statusCode || 500).send({error: error.message || "internal server error"})
            } else {
                reply.status(500).send({message: error.message})
            }
        })
    }
}