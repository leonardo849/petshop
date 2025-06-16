import { FastifyInstance } from "fastify";
import {PrismaClient} from "../../../generated/client.js"
import { SchedulingController } from "../../controllers/scheduling.controller.js";
import { isManager } from "../middlewares/is-manager.js";
import { isWorker } from "../middlewares/is-worker.js";

export class SchedulingRoutes {
    private schedulingController: SchedulingController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.schedulingController = new SchedulingController(app, prisma)
    }
    SetupSchedulingRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isManager,
                handler: this.schedulingController.CreateScheduling.bind(this.schedulingController)
            })
            app.get("/all/:skip/:take", {
                preHandler: isWorker,
                handler: this.schedulingController.FindAllSchedulings.bind(this.schedulingController)
            })
            app.get("/one/:id", {
                preHandler: isWorker,
                handler: this.schedulingController.FindOneScheduling.bind(this.schedulingController)
            })
            app.patch("/update/:id", {
                preHandler: isWorker,
                handler: this.schedulingController.UpdateOneScheduling.bind(this.schedulingController)
            })
        }, {prefix: "scheduling"})

        console.log("scheduling's routes are ready")
    }
}