import { FastifyInstance } from "fastify";
import {PrismaClient} from "../../../generated/client.js"
import { ServiceController } from "../../controllers/service.controller.js";
import { isManager } from "../middlewares/is-manager.js";

export class ServiceRoutes {
    private serviceController: ServiceController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.serviceController = new ServiceController(prisma, app)
    }
    SetupServiceRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isManager,
                handler: this.serviceController.CreateService.bind(this.serviceController)
            })
            app.get("/all", this.serviceController.FindAllServices.bind(this.serviceController))
            app.put("/update/:id", {
                preHandler: isManager,
                handler: this.serviceController.UpdateService.bind(this.serviceController)
            })
        }, {prefix: "service"})

        console.log("service's routes are ready")
    }
}