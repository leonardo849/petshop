import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "../../generated";
import { ProductService } from "../services/product.service.js";
import { CreateProductDTO, UpdateOneProductQuantityDTO, UpdateProductDTO } from "../dto/product.dto.js";


export class ProductController {
    private productService: ProductService
    constructor(prisma: PrismaClient, app: FastifyInstance) {
        this.productService = new ProductService(prisma, app)
    }
    async CreateProduct(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateProductDTO
        try {
            const message = await this.productService.CreateProduct(body)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindAllProducts(request: FastifyRequest, reply: FastifyReply) {
        const {skip, take} = request.params as {skip: string, take: string}
        try {
            const products = await this.productService.FindAllProducts(Number(skip), Number(take))
            return products
        } catch (error) {
            throw error
        }
    }
    async UpdateOneProductQuantity(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        const body = request.body as UpdateOneProductQuantityDTO
        try {
            const message = await this.productService.AddProductQuantity(id, body)
            return message
        } catch (error) {
            throw error
        }
    }
    async UpdateProduct(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        const body = request.body as UpdateProductDTO
        try {
            const message = await this.productService.UpdateProduct(id, body)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindOneProduct(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        try {
            const message = await this.productService.FindOneProduct(id)
            return message
        } catch (error) {
            throw error
        }
    }
    async DeleteProduct(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        try {
            const message = await this.productService.DeleteProduct(id)
            return message
        } catch (error) {
            throw error
        }
    }
}