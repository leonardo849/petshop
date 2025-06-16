import { FastifyInstance } from "fastify";
import { PrismaClient } from "../../../generated";
import { ProductController } from "../../controllers/product.controller.js";
import { isManager } from "../middlewares/is-manager.js";

export class ProductRoutes {
    private productController: ProductController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.productController = new ProductController(prisma, app)
    }
    SetupProductsRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isManager,
                handler: this.productController.CreateProduct.bind(this.productController)
            })
        }, {prefix: "product"})
        console.log("product's routes are working!")
    }
}