import { CreatePurchaseDTO } from "../dto/purchase.dto.js";
import { PrismaClient, Role } from "../../generated";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { FastifyInstance } from "fastify";
import { ProductService } from "./product.service.js";


export class PurchaseService {
    private purchaseModel
    constructor(prisma: PrismaClient, private readonly app: FastifyInstance, private readonly productService: ProductService) {
        this.purchaseModel = prisma.purchase
    }
    async CreatePurchase(body: CreatePurchaseDTO, workerID: string) {
        let total: number = 0
        const errors = await validate(plainToInstance(CreatePurchaseDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const products = await Promise.all(body.products.map(element => this.productService.FindOneProduct(element.productID)))
        products.forEach(productInDB => {
            const foundProduct = body.products.find(element => element.productID === productInDB.id)
            if (foundProduct) {
                total += productInDB.price *  foundProduct.quantity
            }
        })
        const productsIds = products.map(element => element.id)

        const purchase = await this.purchaseModel.create({
            data: {
                total: total,
                customer: {
                    connect: {id: body.customerID}
                },
                worker: {
                    connect: {id: workerID}
                },
                products: {
                    create: productsIds.map(id => {
                        return {product:{connect: {id: id}}}
                    })
                }
            }
        })
        return {
            message: "purchase was created",
            id: purchase.id
        }
    }
}