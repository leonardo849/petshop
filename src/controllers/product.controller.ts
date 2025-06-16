import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "../../generated";
import { ProductService } from "../services/product.service.js";
import { CreateProductDTO } from "../dto/product.dto.js";


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
}