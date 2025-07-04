import { FastifyInstance } from "fastify"
import { PrismaClient } from "../../../generated"
import { isManager } from "../middlewares/is-manager.js"
import { PetController } from "../../controllers/pet.controller.js"
import { CustomerService } from "../../services/customer.service.js"
import { isCustomer } from "../middlewares/is-customer.js"

export class PetRoutes {
    private petController: PetController
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.petController = new PetController(app, prisma)
    }
    SetupPetRoutes() {
        this.app.register((app) => {
            app.post("/create", {
                preHandler: isCustomer,
                handler: this.petController.CreatePet.bind(this.petController)
            })
            app.get("/all/:skip/:take", {
                preHandler: isManager,
                handler: this.petController.FindAllPets.bind(this.petController)
            })
            app.get("/mypets/:skip/:take", {
                preHandler: isCustomer,
                handler: this.petController.FindMyPets.bind(this.petController)
            })
            app.get("/one/:id", {
                preHandler: isCustomer,
                handler: this.petController.FindOnePet.bind(this.petController)
            })
            app.delete("/delete/:id", {
                preHandler: isCustomer,
                handler: this.petController.DeletePet.bind(this.petController)
            })
        }, {prefix: "pet"})
        console.log(`pet's routes are running!`)
    }
}