import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {PrismaClient} from "../../generated"
import { PetService } from "../services/pet.service.js";
import { CustomerService } from "@src/services/customer.service";
import { CreatePetDTO } from "../dto/pet.dto.js";

export class PetController {
    private petService: PetService
    constructor(app: FastifyInstance ,prisma: PrismaClient, customerService: CustomerService) {
        this.petService = new PetService(prisma, app, customerService)
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
}