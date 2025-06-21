import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { WorkerController } from "../../controllers/worker.controller.js"
import { isManager } from "../middlewares/is-manager.js";
import { isSameEmail } from "../middlewares/is-same-email.js";

export class WorkerRoutes {
    private workerController: WorkerController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.workerController = new WorkerController(app, prisma)
    }
    SetupWorkerRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isManager,
                handler: this.workerController.CreateWorker.bind(this.workerController)
            })
            app.get("/all/:skip/:take", {
                preHandler: isManager,
                handler: this.workerController.FindAllWorkers.bind(this.workerController)
            })
            app.post("/login", this.workerController.LoginWorker.bind(this.workerController))
            app.delete("/delete/:email", {
                preHandler: isSameEmail,
                handler: this.workerController.DeleteOneWorkerByEmail.bind(this.workerController)
            })
            app.put("/update/:email", {
                preHandler: isSameEmail,
                handler: this.workerController.UpdateOneWorkerByEmail.bind(this.workerController)
            })
            app.get("/one/:email", {
                preHandler: isSameEmail,
                handler: this.workerController.FindOneWorkerByEmail.bind(this.workerController)
            })
            app.get("/report", {
                preHandler: isManager,
                handler: this.workerController.GetMonthlyReport.bind(this.workerController)
            })
        }, {prefix: "worker"})
        console.log(`worker's routes are running!`)
    }
}