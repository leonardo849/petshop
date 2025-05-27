import { FastifyInstance } from "fastify";
import { HttpError } from "@fastify/sensible";
import { WorkerRoutes } from "./routes/worker.routes.js"
import { PrismaClient } from "../../generated/client.js";
import { verifyJWT } from "./middlewares/verify-jwt.js";
import { isOutOfDate } from "./middlewares/is-out-of-date.js";

export class Server {
    private prisma: PrismaClient = new PrismaClient()
    private workerRoutes: WorkerRoutes
    constructor(private readonly app: FastifyInstance) {
        const prisma = new PrismaClient()
        this.workerRoutes = new WorkerRoutes(app, this.prisma)
    }
    async RunServer(port: number) {
        try {
            this.SetErrorHandler()
            this.SetupRoutes()
            this.SetupHooks()
            await this.app.listen({host: "0.0.0.0", port: port})
            console.log(`server is running on port ${port}`)
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
    private SetupRoutes() {
        this.workerRoutes.SetupWorkerRoutes()
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
    private  SetupHooks() {
        this.app.addHook("onRequest", async (request, reply) => {
            await verifyJWT(request, reply)
            await isOutOfDate(request, reply, this.app, this.prisma)
        })
    }
}