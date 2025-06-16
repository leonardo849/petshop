import { CreateProductDTO } from "../dto/product.dto.js";
import { PrismaClient } from "../../generated";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { FastifyInstance } from "fastify";

export class ProductService {
    private productModel
    constructor(prisma: PrismaClient, private readonly app: FastifyInstance) {
        this.productModel = prisma.product
    }
    async CreateProduct(body: CreateProductDTO) {
        const errors = await validate(plainToInstance(CreateProductDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }

        const product = await this.productModel.create({data: body})
        return {
            message: "product was created",
            id: product.id
        }
    }
}