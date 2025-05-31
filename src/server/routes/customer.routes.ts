import { FastifyInstance } from "fastify"
import { CustomerController } from "../../controllers/customer.controller.js"
import { PrismaClient } from "../../../generated"
import { isManager } from "../middlewares/is-manager.js"
import { isSameEmail } from "../middlewares/is-same-email.js"

export class CostumerRoutes {
    private customerController: CustomerController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.customerController = new CustomerController(app, prisma)
    }
    SetupCustomerRoutes() {
        this.app.register((app) => {
            app.post("/create", this.customerController.CreateCustomer.bind(this.customerController))
            app.get("/all/:skip/:take", {
                preHandler: isManager,
                handler: this.customerController.FindAllCustomers.bind(this.customerController)
            })
            app.post("/login", this.customerController.LoginCustomer.bind(this.customerController))
            app.delete("/delete/:email", {
                preHandler: isSameEmail,
                handler: this.customerController.DeleteOneCustomer.bind(this.customerController)
            })
            app.put("/update/:email", {
                 preHandler: isSameEmail,
                 handler: this.customerController.UpdateCustomer.bind(this.customerController)
             })
            app.get("/one/:email", {
                preHandler: isSameEmail,
                handler: this.customerController.FindOneByEmail.bind(this.customerController)
            })
        }, {prefix: "customer"})
        console.log(`customer's routes are running!`)
    }
}