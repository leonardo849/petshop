import { FastifyInstance } from "fastify";
import { PrismaClient } from "../../../generated";
import { PurchaseController } from "../../controllers/purchase.controller.js";
import { isCashier } from "../middlewares/is-cashier.js";

export class PurchaseRoutes {
    private purchaseController: PurchaseController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.purchaseController = new PurchaseController(prisma, app)
    }
    SetupPurchaseRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isCashier,
                handler: this.purchaseController.CreatePurchase.bind(this.purchaseController)
            })
        }, {prefix: "purchase"})

        console.log("purchase's routes are working!")
    }
}