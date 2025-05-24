import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { WorkerController } from "../../controllers/worker.controller.js"

export class WorkerRoutes {
    private workerController: WorkerController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.workerController = new WorkerController(app, prisma)
    }
    SetupWorkerRoutes() {
        this.app.register((app) => {
            app.post("/create", this.workerController.CreateWorker.bind(this.workerController))
            app.get("/all/:skip/:take", this.workerController.FindAllWorkers.bind(this.workerController))
            app.post("/login", this.workerController.LoginWorker.bind(this.workerController))
        }, {prefix: "worker"})
        console.log(`worker's routes are running!`)
    }
}