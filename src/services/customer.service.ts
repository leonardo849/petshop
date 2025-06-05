import { FastifyInstance } from "fastify";
import { PrismaClient } from "../../generated";
import { CreateCustomerDTO, UpdateCustomerDTO } from "../dto/customer.dto.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import {HashMethods} from "../crypto/hash-password.js"
import { LoginDTO } from "../dto/login.dto.js";
import { JWT } from "../crypto/jwt.js";


export class CustomerService {
    private customerModel 
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.customerModel = prisma.customer
    }
    async CreateCustomer(body: CreateCustomerDTO) {
        const errors = await validate(plainToInstance(CreateCustomerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const searchedCustomer = await this.customerModel.findFirst({where:{email: body.email}})
        if (searchedCustomer) {
            throw this.app.httpErrors.conflict("customer already exists with that email")
        }
        const {name, email, password, address} = body
        const hashedPassword = await HashMethods.HashPassword(password)
        const customer = await this.customerModel.create({data: {
            name,
            email,
            password: hashedPassword,
            address
        }})

        return {
            message: "customer was created",
            id: customer.id
        }
    }
    async FindOneCustomerByEmail(email: string, omitPassword: boolean = true) {
        const customer = await this.customerModel.findFirst({where:{email}, omit: {password: omitPassword}, include: {pets: true}})
        if (!customer) {
            throw this.app.httpErrors.notFound("customer wasn't found")
        }
        return customer
    }
    async LoginCustomer(body: LoginDTO) {
        const customer = await this.FindOneCustomerByEmail(body.email, false)
        const isPasswordRight = await HashMethods.ComparePasswords(body.password, customer.password)
        if (isPasswordRight) {
            const newJWT = JWT.SignJWT({email: customer.email, id: customer.id, role: "CUSTOMER", updatedAt: customer.updatedAt})
            return {
                token: newJWT
            }
        } else {
            throw this.app.httpErrors.unauthorized("your login is wrong")
        }
    }
    async UpdateCustomer(email: string, body: UpdateCustomerDTO) {
        await this.FindOneCustomerByEmail(email)
        await this.customerModel.update({where:{email}, data: body})
        const errors = await validate(plainToInstance(UpdateCustomerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        return {
            message: "customer was updated"
        }
    }
    async FindAllCustomers(take: number, skip: number) {
        return await this.customerModel.findMany({omit: {password: true}, take, skip})
    }
    async DeleteOneCustomer(email: string) {
        await this.FindOneCustomerByEmail(email)
        await this.customerModel.delete({where:{email}})
        return {
            message: "customer was deleted"
        }
    }
    async FindOneCustomerById(id: string) {
        const customer = await this.customerModel.findFirst({where:{id}, omit: {password: true}})
        if (!customer) {
            throw this.app.httpErrors.notFound("customer wasn not found")
        }
        return customer
    }
}