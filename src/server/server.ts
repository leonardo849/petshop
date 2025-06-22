import { FastifyInstance } from "fastify";
import { HttpError } from "@fastify/sensible";
import { WorkerRoutes } from "./routes/worker.routes.js"
import { PrismaClient } from "../../generated/client.js";
import { verifyJWT } from "./middlewares/verify-jwt.js";
import { isOutOfDate } from "./middlewares/is-out-of-date.js";
import { CostumerRoutes } from "./routes/customer.routes.js";
import sensible from "@fastify/sensible"
import { PetRoutes } from "./routes/pet.routes.js";
import { SchedulingRoutes } from "./routes/scheduling.routes.js";
import { ServiceRoutes } from "./routes/service.routes.js";
import { ProductRoutes } from "./routes/product.routes.js";
import { checkException } from "./middlewares/check-exception.js";
import { PurchaseRoutes } from "./routes/purchase.routes.js";
import { WorkerService } from "../services/worker.service.js";
import { PurchaseService } from "../services/purchase.service.js";
import { ProductService } from "../services/product.service.js";
import { SchedulingService } from "../services/scheduling.service.js";
import { ServiceService } from "../services/service.service.js";
import { PetService } from "../services/pet.service.js";
import { CustomerService } from "../services/customer.service.js";


export class Server {
    private prisma: PrismaClient = new PrismaClient()
    private workerRoutes: WorkerRoutes
    private customerRoutes: CostumerRoutes
    private petRoutes: PetRoutes
    private schedulingRoutes: SchedulingRoutes
    private serviceRoutes: ServiceRoutes
    private productRoutes: ProductRoutes
    private purchaseRoutes: PurchaseRoutes
    constructor(private readonly app: FastifyInstance) {
        this.workerRoutes = new WorkerRoutes(app, this.prisma)
        this.customerRoutes = new CostumerRoutes(app, this.prisma)
        this.petRoutes = new PetRoutes(app, this.prisma)
        this.schedulingRoutes = new SchedulingRoutes(app, this.prisma)
        this.serviceRoutes = new ServiceRoutes(app, this.prisma)
        this.productRoutes = new ProductRoutes(app, this.prisma)
        this.purchaseRoutes = new PurchaseRoutes(app, this.prisma)
    }
    async RunServer(port: number) {
        try {
            await this.app.register(sensible)
            this.SetErrorHandler()
            this.SetupRoutes()
            this.SetupHooks()
            await this.SetupRoutines()
            await this.app.listen({host: "0.0.0.0", port: port})
            console.log(`server is running on port ${port}`)
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
    private SetupRoutes() {
        this.workerRoutes.SetupWorkerRoutes()
        this.customerRoutes.SetupCustomerRoutes()
        this.petRoutes.SetupPetRoutes()
        this.schedulingRoutes.SetupSchedulingRoutes()
        this.serviceRoutes.SetupServiceRoutes()
        this.productRoutes.SetupProductsRoutes()
        this.purchaseRoutes.SetupPurchaseRoutes()

    }
    private SetErrorHandler() {
       this.app.setErrorHandler((error, request, reply) => {
        console.log(error)
            if (error instanceof HttpError) {
                reply.status(error.statusCode || 500).send({error: error.message || "internal server error"})
            } else {
                reply.status(500).send({message: error.message})
            }
        })
    }
    private  SetupHooks() {
        this.app.addHook("onRequest", async (request, reply) => {
            if (checkException(request)) {
                return
            }
            await verifyJWT(request, reply)
            await isOutOfDate(request, reply, this.app, this.prisma)
        })
    }
    private async SetupRoutines() {
        const productService = new ProductService(this.prisma, this.app)
        const purchaseService = new PurchaseService(this.prisma, this.app, productService)
        const workerService = new WorkerService(this.app, this.prisma, purchaseService)
        const serviceService = new ServiceService(this.app, this.prisma)
        const customerService = new CustomerService(this.app, this.prisma)
        const petService = new PetService(this.prisma, this.app, customerService)
        const schedulingService = new SchedulingService(this.app, this.prisma, serviceService, petService)
        schedulingService.SetWorkerService(workerService)
        workerService.SetSchedulingService(schedulingService)
        await this.CheckSchedulings(schedulingService)
        await this.SendMonthlyReport(workerService)
    }
    private async CheckSchedulings(schedulingService: SchedulingService) {
        
        const run = async () => {
            try {
               await schedulingService.CheckSchedulings()
            } catch (error) {
                console.error(`error in check schedulings: ${error}`)
            }
        }
        await run()
        setInterval(run, 120 * 60 * 1000)
    }
    private async SendMonthlyReport(workerService: WorkerService) {
        const run = async () => {
            try {
                if (new Date().getDate() === 1) {
                    await workerService.SendReportToManagers()
                }
            } catch (error) {
                console.error(`error in monthly reports: ${error}`)
            }
        }
        await run()
        setInterval(run, 1440 * 60 * 1000)

    }
}