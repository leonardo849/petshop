import { FastifyInstance } from "fastify";
import { PrismaClient } from "../../generated";
import { CreateCustomerDTO } from "../dto/customer.dto";

export class CustomerService {
    private customerModel 
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.customerModel = prisma.customer
    }
    async CreateCustomer(body: CreateCustomerDTO) {
        
    }
    async FindOneCustomerByEmail(email: string, omitPassword: boolean = true) {
        const customers = await this.customerModel.findFirst({where:{email}, omit: {password: omitPassword}})
        return customers

    }
}