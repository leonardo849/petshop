import { CreatePurchaseDTO } from "../dto/purchase.dto.js";
import { PrismaClient, Role } from "../../generated";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { FastifyInstance } from "fastify";
import { ProductService } from "./product.service.js";
import {isThereDuplicate} from "../helpers/check-duplicate.js"


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
        if (isThereDuplicate(body.products, (element) => element.productID)) {
            throw this.app.httpErrors.badRequest("same products cannot be shipped in different objects")
        }
        const products = await Promise.all(body.products.map(element => this.productService.FindOneProduct(element.productID)))
        for (let productInDB of products) {
            const foundProduct = body.products.find(element => element.productID === productInDB.id)
            if (foundProduct) {
                this.productService.AddProductQuantity(productInDB.id, {quantity: -foundProduct.quantity})
                total += productInDB.price *  foundProduct.quantity
            }
        }
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
    async GetValueOfPurchases(month: number, year: number): Promise<number> {
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfNextMonth = new Date(year, month + 1, 1);
        const filter = {
            createdAt: {
                gte: firstDayOfMonth,
                lt: firstDayOfNextMonth
            }
        }
        const purchases = await this.purchaseModel.findMany({where: filter})
        let revenue: number = 0
        if (purchases.length > 0) {
            revenue = (purchases.reduce((accumulator, currentValue) => accumulator += currentValue.total, 0))
        }
        return revenue
    }
}