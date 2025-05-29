import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CustomerService } from "../services/customer.service.js";
import { PrismaClient } from "../../generated";
import { CreateCustomerDTO } from "../dto/customer.dto.js";
import { LoginDTO } from "../dto/login.dto.js";

export class CustomerController {
    private customerService: CustomerService
    constructor(app: FastifyInstance, prisma: PrismaClient) {
        this.customerService = new CustomerService(app, prisma)   
    }
    async CreateCustomer(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreateCustomerDTO
        try {
            const message = await this.customerService.CreateCustomer(body)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindOneByEmail(request: FastifyRequest, reply: FastifyReply) {
        const {email} = request.params as {email: string}
        try {
            const message = await this.customerService.FindOneCustomerByEmail(email)
            return message
        } catch (error) {
            throw error
        }
    }
    async LoginCustomer(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as LoginDTO
        try {
            const token = await this.customerService.LoginCustomer(body)
            return token
        } catch (error) {
            throw error
        }
    }
    async FindAllCustomers(request: FastifyRequest, reply: FastifyReply) {
        const {skip, take} = request.params as {skip: string, take: string}
        try {

        } catch (error) {
            throw error
        }
    }
}