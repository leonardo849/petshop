import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {PrismaClient} from "../../generated"
import { PetService } from "../services/pet.service.js";
import { CustomerService } from "../services/customer.service.js";
import { CreatePetDTO } from "../dto/pet.dto.js";

export class PetController {
    private petService: PetService
    constructor(app: FastifyInstance ,prisma: PrismaClient) {
        this.petService = new PetService(prisma, app, new CustomerService(app, prisma))
    }
    async CreatePet(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as CreatePetDTO
        try {
            const message = await this.petService.CreatePet(body, request.user.id)
            return message
        } catch (error) {
            throw error
        }
    }
    async FindAllPets(request: FastifyRequest, reply: FastifyReply) {
        const {skip, take} = request.params as {skip: string, take: string}
        try {
            const pets = await this.petService.FindAllPets(Number(skip), Number(take))
            return pets
        } catch (error) {
            throw error
        }
    }
    async FindMyPets(request: FastifyRequest, reply: FastifyReply) {
        const {skip, take} = request.params as {skip: string, take: string}
        try {
            const pets = await this.petService.FindAllPets(Number(skip), Number(take), request.user.id)
            return pets
        } catch (error) {
            throw error
        }
    }
    async FindOnePet(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        try {
            const pet = await this.petService.FindOnePet(id)
            return pet
        } catch (error) {
            throw error
        }
    }
    async DeletePet(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as {id: string}
        try {
            const message = await this.petService.DeletePet(id, request.user.id)
            return message
        } catch (error) {
            throw error
        }        
    }
}