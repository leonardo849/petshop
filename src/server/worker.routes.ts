import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { WorkerController } from "../controllers/worker.controller.js";

export class WorkerRoutes {
    private workerController: WorkerController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.workerController = new WorkerController(app, prisma)
    }
    SetupWorkerRoutes(prisma: PrismaClient) {
        this.app.register((app) => {
            app.post("/create", this.workerController.CreateWorker.bind(this.workerController))
        }, {prefix: "worker"})
        console.log(`worker's routes are running!`)
    }
}