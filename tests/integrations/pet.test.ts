import { JWT } from "../../src/crypto/jwt"
import { CreateCustomerDTO } from "../../src/dto/customer.dto"
import { LoginDTO } from "../../src/dto/login.dto"
import { IPayload } from "../../src/types/interfaces/payload"
import { CustomerControllerTests } from "./customer.test"
import { generateString } from "./worker.test"
import {CreatePetDTO} from "../../src/dto/pet.dto"
import axios from "axios"
import { url } from "../setup"
import { Pet } from "../../generated"

let payload: IPayload
let token: string

export class PetControllerTests {
    static async CreatePet(body: CreatePetDTO): Promise<number> {
        const response = await axios.post(`${url}/pet/create`, body, {
            headers: {Authorization: `Bearer ${token}`}
        })

        return response.status
    }
    static async FindAllPets(): Promise<Pet[]> {
        const response = await axios.get(`${url}/pet/all/0/5`)
        return response.data
    }
    static async FindMyPets(): Promise<Pet[]> {
        const response = await axios.get(`${url}/pet/mypets/0/5`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
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
            name: "batman",
            species: "donkey",
            race: "Equus asinus",
            weight: 50
        }
        const status = await PetControllerTests.CreatePet(body)
        expect(status).toBe(200)
    })
    it("find all pets", async () => {
        const pets = await PetControllerTests.FindAllPets()
        expect(pets.length).toBeGreaterThan(0)
    })
    it("find my pets", async () => {
         const pets = await PetControllerTests.FindAllPets()
         expect(pets.length).toBeGreaterThan(0)
    })
})