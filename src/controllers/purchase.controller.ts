import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "../../generated";
import { PurchaseService } from "../services/purchase.service";
import { ProductService } from "../services/product.service";
import { CreatePurchaseDTO } from "../dto/purchase.dto";

export class PurchaseController {
    private purchaseService: PurchaseService
    constructor(prisma: PrismaClient, app: FastifyInstance) {
        this.purchaseService = new PurchaseService(prisma, app, new ProductService(prisma, app))
    }
    async CreatePurchase(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreatePurchaseDTO
        try {
            const message = await this.purchaseService.CreatePurchase(body, request.user.id)
            return message
        } catch (error) {
            throw error
        }
    }
}