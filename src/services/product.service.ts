import { CreateProductDTO, UpdateOneProductQuantityDTO, UpdateProductDTO } from "../dto/product.dto.js";
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
    async FindAllProducts(skip: number, take: number) {
        const products = await this.productModel.findMany({skip, take})
        return products
    }
    async FindOneProduct(id: string) {
        const product = await this.productModel.findFirst({where: {id}})
        if (!product) {
            throw this.app.httpErrors.notFound("product wasn't found")
        }
        return product
    }
    async AddProductQuantity(id: string, body: UpdateOneProductQuantityDTO) {
        const errors = await validate(plainToInstance(UpdateOneProductQuantityDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const product = await this.FindOneProduct(id)
        if (body.quantity < 0 && Math.abs(body.quantity) > product.quantity) {
            throw this.app.httpErrors.badRequest("there isn't enough quantity")
        }
        await this.productModel.update({where:{id}, data: {
            quantity: {
                increment: body.quantity
            }
        }})
        return {
            message: "product was updated"
        }
    }
    async UpdateProduct(id: string, body: UpdateProductDTO) {
        const errors = await validate(plainToInstance(UpdateProductDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        await this.FindOneProduct(id)
        await this.productModel.update({where:{id}, data: body})
        return {
            message: "product was updated"
        }
    }
    async DeleteProduct(id: string) {
        await this.FindOneProduct(id)
        await this.productModel.delete({where:{id}})
        return {
            message: "product was deleted"
        }
    }
}