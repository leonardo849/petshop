import { FastifyInstance } from "fastify";
import { PrismaClient, Role} from "../../generated/client.js";
import { LoginDTO } from "../dto/login.dto.js";
import { CreateWorkerDTO, UpdateWorkerDTO } from "../dto/worker.dto.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { HashMethods } from "../crypto/hash-password.js";
import { JWT } from "../crypto/jwt.js";
import { IPayload } from "../types/interfaces/payload.js";


export class WorkerService {
    private workerModel
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.workerModel = prisma.worker
    }
    async CreateWorker(body: CreateWorkerDTO) {
        const errors = await validate(plainToInstance(CreateWorkerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const passwordhashed = await HashMethods.HashPassword(body.password)
        const workerSearched = await this.workerModel.findFirst({where:{email: body.email}})
        if (workerSearched) {
            throw this.app.httpErrors.conflict("there is already a worker with that email")
        }
        const worker = await this.workerModel.create({data: {
                    email: body.email,
                    name: body.name,
                    role: body.role,
                    salary: body.salary,
                    password: passwordhashed
                }
            }
        )
        return {
            message: "worker was created",
            id: worker.id
        }
    }
    async FindAllWorkers(skip: number, take: number) {
        return await this.workerModel.findMany({take: take,skip: skip ,omit: {password: true}, orderBy: {salary: "desc"}})
    }
    async FindWorkerByEmail(email: string, omitPassword: boolean = true) { 
        const worker = await this.workerModel.findFirst({omit: {password: omitPassword}, where:{email}, include: {schedulings: true}})
        if (!worker) {
            throw this.app.httpErrors.notFound(`worker with email ${email} wasn't found`)
        }
        return worker
    }
    async LoginWorker(body: LoginDTO) {
        const errors = await validate(plainToInstance(LoginDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const worker = await this.FindWorkerByEmail(body.email, false)
        const isPasswordCorrect = await HashMethods.ComparePasswords(body.password, worker.password)
        if (isPasswordCorrect) {
            const jwt = JWT.SignJWT({id: worker.id, email: worker.email, role: worker.role, updatedAt: worker.updatedAt})
            return {
                token: jwt
            }
        } else {
            throw this.app.httpErrors.unauthorized("password is wrong")
        }
    }
    async DeleteWorkerByEmail(email: string) {
        await this.FindWorkerByEmail(email)
        await this.workerModel.delete({where:{email}})
        return {
            message: "worker was deleted"
        }
    }
    async UpdateWorkerByEmail(body: UpdateWorkerDTO, email: string) {
        await this.FindWorkerByEmail(email)
        const errors = await validate(plainToInstance(UpdateWorkerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }


        await this.workerModel.update({where:{email}, data: body})
        return {
            message: "worker was updated"
        }
    }
}