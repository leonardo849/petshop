import { CreatePetDTO } from "../dto/pet.dto.js";
import { PrismaClient } from "../../generated";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { FastifyInstance } from "fastify";
import { CustomerService } from "./customer.service.js";

export class PetService {
    private petModel
    constructor(prisma: PrismaClient, private readonly app: FastifyInstance, private readonly customerService: CustomerService) {
        this.petModel = prisma.pet
    }
    async CreatePet(body: CreatePetDTO, id: string) {
        const errors = await validate(plainToInstance(CreatePetDTO, body))
        if (errors.length > 0) {
            throw this.app.httpErrors.badRequest(`errors: ${errors}`)
        }
        await this.customerService.FindOneCustomerById(id)
        const pet = await this.petModel.create({data: {
            name: body.name,
            dateOfBirth: body.dateOfBirth,
            race: body.race,
            species: body.species,
            weight: body.weight,
            customer: {
                connect: {
                    id: id
                }
            }
        }})
        return {
            message: "pet was created",
            id: pet.id
        }
    }
    async FindAllPets(skip: number, take: number, id?: string) {
        const pets = await this.petModel.findMany({skip, take, where: {customerID: id}})
        return pets
    }
}