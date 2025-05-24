import { FastifyInstance } from "fastify";
import { PrismaClient} from "../../generated/client.js";
import { CreateWorkerDTO, LoginWorkerDTO } from "../dto/worker.dto.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { HashMethods } from "../crypto/hash-password.js";
import { JWT } from "../crypto/jwt.js";



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
            message: `worker was created. ID: ${worker.id}`
        }
    }
    async FindAllWorkers(skip: number, take: number) {
        return await this.workerModel.findMany({take: take,skip: skip ,omit: {password: true}, orderBy: {salary: "desc"}})
    }
    async FindWorkerByEmail(email: string) { 
        const worker = await this.workerModel.findFirst({omit: {password: true}, where:{email}})
        if (!worker) {
            throw this.app.httpErrors.notFound(`worker with email ${email} wasn't found`)
        }
        return worker
    }
    async LoginWorker(body: LoginWorkerDTO) {
        const errors = await validate(plainToInstance(LoginWorkerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const worker = await this.workerModel.findFirst({where:{email: body.email}})
        if (!worker) {
            throw this.app.httpErrors.notFound(`worker with email ${body.email} wasn't found`)
        }
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
}