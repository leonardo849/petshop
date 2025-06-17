import { JWT } from "../../src/crypto/jwt"
import { CreateCustomerDTO } from "../../src/dto/customer.dto"
import { LoginDTO } from "../../src/dto/login.dto"
import { IPayload } from "../../src/types/interfaces/payload"
import { CustomerControllerTests } from "./customer.test"
import { generateString } from "./worker.test"
import {CreatePetDTO} from "../../src/dto/pet.dto"
import axios from "axios"
import { prisma, url } from "../setup"
import { Pet } from "../../generated"

let payload: IPayload
let token: string

export class PetControllerTests {
    static async CreatePet(body: CreatePetDTO): Promise<{status: number, data?: {message: string, id: string}}> {
        try {
            const response = await axios.post(`${url}/pet/create`, body, {
            headers: {Authorization: `Bearer ${token}`}})
            return {status: response.status, data: response.data}
        }
        catch(error: any) {
            return {status: error.response.status, data: undefined}
        }
        
    }
    static async FindMyPets(): Promise<Pet[]> {
        const response = await axios.get(`${url}/pet/mypets/0/5`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
    }
    static async FindOnePet(id: string): Promise<{status: number, pet: Pet}> {
        const response = await axios.get(`${url}/pet/one/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return {status: response.status, pet: response.data}
    }
    static async DeletePet(id: string): Promise<number> {
        const response = await axios.delete(`${url}/pet/delete/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
}


describe("test pets", () => {
    beforeAll(async () => {
        const name = generateString(50)
        const password = "yvIWW6'$%474"
        const body: CreateCustomerDTO = {
            address: generateString(30),
            email: "customerPet@gmail.com",
            name: name,
            password: password
        }
        const status = await CustomerControllerTests.CreateCustomer(body)
        expect([409, 200]).toContain(status)
        const loginBody: LoginDTO = {
            email: body.email,
            password: password
        }
        const {data} = await CustomerControllerTests.LoginCustomer(loginBody)
        token = data.token
        payload = await JWT.VerifyJWT(token)
    })
    it("create pet", async () => {
        const body: CreatePetDTO = {
            dateOfBirth: "2025-05-05",
            name: "BATMAN",
            species: "donkey",
            race: "Equus asinus",
            weight: 50
        }
        const {status} = await PetControllerTests.CreatePet(body)
        expect([409, 200]).toContain(status)
    })
    it("expect error", async () => {
        const body: CreatePetDTO = {
            dateOfBirth: "2023-05-03",
            name: "beans",
            species: "horse",
            race: "Equus caballus",
            weight: -1
        }
        const {status} = await PetControllerTests.CreatePet(body)
        expect(status).toBe(400)
    })
    it("find my pets", async () => {
         const pets = await PetControllerTests.FindMyPets()
         expect(pets.length).toBeGreaterThan(0)
    })
    it("delete pet", async () => {
        const body: CreatePetDTO = {
            dateOfBirth: "2025-05-05",
            name: generateString(13).toUpperCase(),
            species: "donkey",
            race: "Equus asinus",
            weight: 50
        }
        const {status, data} =  await PetControllerTests.CreatePet(body)
        expect(status).toBe(200)
        const id = data?.id as string
        const statusDeleted = await PetControllerTests.DeletePet(id)
        expect(statusDeleted).toBe(200)
    })
    const petNameForFindOne = generateString(15).toUpperCase()
    it("find one pet", async () => {
        const body: CreatePetDTO = {
            dateOfBirth: "2023-05-03",
            name: petNameForFindOne,
            species: "horse",
            race: "Equus caballus",
            weight: 30
        }
        const {status, data} = await PetControllerTests.CreatePet(body)
        expect([409, 200]).toContain(status)
        
        const id = data?.id 
        const response = await PetControllerTests.FindOnePet(id as string)
        expect(response.pet).toHaveProperty("name", body.name)
        
    })
    afterAll(async () => {
        await prisma.pet.deleteMany({where:{name: petNameForFindOne}})
    })
})