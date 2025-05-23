import { FastifyInstance } from "fastify";
import { PrismaClient} from "../../generated/client.js";
import { CreateWorkerDTO } from "../dto/worker.dto.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { HashPassword } from "../crypto/hash-password.js";


export class WorkerService {
    private workerRepository
    constructor(private readonly app: FastifyInstance, prisma: PrismaClient) {
        this.workerRepository = prisma.worker
    }
    async CreateWorker(body: CreateWorkerDTO) {
        const errors = await validate(plainToInstance(CreateWorkerDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        const passwordhashed = await HashPassword(body.password)
        const worker = await this.workerRepository.create({data: {
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
}