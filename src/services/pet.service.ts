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
        const customer = await this.customerService.FindOneCustomerById(id)
        let pet = await this.petModel.findFirst({where:{customerID: customer.id, name: body.name}})
        if (pet) {
            throw this.app.httpErrors.conflict(`you have already a pet with that name`)
        }
        pet = await this.petModel.create({data: {
            name: body.name,
            dateOfBirth: new Date(body.dateOfBirth),
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
    async FindOnePet(id: string) {
        const pet = await this.petModel.findFirst({where:{id}})
        if (!pet) {
            throw this.app.httpErrors.notFound("pet not found")
        }
        return pet
    }
    async DeletePet(id: string, customerID: string) {
        const pet = await this.FindOnePet(id)
        if (pet.customerID !== customerID) {
            throw this.app.httpErrors.forbidden("you can't delete the another customer's pet")
        }
        await this.petModel.delete({where:{id}})
    }
}