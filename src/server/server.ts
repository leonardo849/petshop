import { httpErrors } from "@fastify/sensible";
import { FastifyInstance } from "fastify";
import { HttpError } from "@fastify/sensible";
import { WorkerRoutes } from "./worker.routes.js";
import { PrismaClient } from "../../generated/client.js";

export class Server {
    private prisma = new PrismaClient()
    private workerRoutes: WorkerRoutes
    constructor(private readonly app: FastifyInstance) {
        this.workerRoutes = new WorkerRoutes(app, this.prisma)
    }
    async RunServer(port: number) {
        try {
            this.SetErrorHandler()
            this.SetupRoutes()
            await this.app.listen({host: "0.0.0.0", port: port})
            console.log(`server is running on port ${port}`)
        } catch (error) {

        }
    }
    private SetupRoutes() {
        this.workerRoutes.SetupWorkerRoutes(this.prisma)
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