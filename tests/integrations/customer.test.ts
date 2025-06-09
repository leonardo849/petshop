import { HashMethods } from "../../src/crypto/hash-password"
import { generateString } from "./worker.test"
import {CreateCustomerDTO, UpdateCustomerDTO} from "../../src/dto/customer.dto"
import axios from "axios"
import {url} from "../setup"
import { LoginDTO } from "../../src/dto/login.dto"
import { Customer } from "../../generated"
import {JWT} from "../../src/crypto/jwt"
import { IPayload } from "../../src/types/interfaces/payload"

let token: string
let payload: IPayload

export class CustomerControllerTests {
    static async CreateCustomer(body: CreateCustomerDTO): Promise<number> {
        try {
            const response = await axios.post(`${url}/customer/create`, body)
            return response.status
        } catch (error: any) {
            if (error.response) {
                return error.response.status
            } else {
                return 500
            }
        }
    }
    static async LoginCustomer(body: LoginDTO): Promise<{data: {token: string}}> {
        const response = await axios.post(`${url}/customer/login`, body)
        return {data: {token: response.data.token}}
    }
    static async FindOneCustomer(email: string): Promise<Omit<Customer, "password">> {
        const response = await axios.get(`${url}/customer/one/${email}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
    }
    static async UpdateCustomer(email: string, body: UpdateCustomerDTO): Promise<number> {
        const response = await axios.put(`${url}/customer/update/${email}`, body, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async DeleteCustomer(email: string): Promise<number> {
        const response = await axios.delete(`${url}/customer/delete/${email}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
}

describe("test customers", () => {
    beforeAll(async () => {
        const name = generateString(50)
        const password = "yvIWW6'$%474"
        const body: CreateCustomerDTO = {
            address: generateString(30),
            email: "customer@gmail.com",
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
    it("find one customer", async () => {
        const data = await CustomerControllerTests.FindOneCustomer(payload.email)
        expect(data).toMatchObject({email: payload.email, id: payload.id})
    })
    it("update one customer", async () => {
        const body: UpdateCustomerDTO = {
            address: generateString(100)
        }
        const status = await CustomerControllerTests.UpdateCustomer(payload.email,body)
        expect(status).toBe(200)
    })
    it("delete customer", async () => {
        const status = await CustomerControllerTests.DeleteCustomer(payload.email)
        expect(status).toBe(200)
    })
})