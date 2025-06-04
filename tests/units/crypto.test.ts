import { IPayload } from "@src/types/interfaces/payload"
import {HashMethods} from "../../src/crypto/hash-password"
import {JWT} from "../../src/crypto/jwt"
import dotenv from "dotenv"

describe("crypto", () => {
    beforeAll(() => {
        dotenv.config()
    })
    it("generate and compare", async () => {
        const password = "batman"
        const hash = await HashMethods.HashPassword(password)
        expect(typeof hash).toBe("string")
        const compare = await HashMethods.ComparePasswords(password, hash)
        expect(compare).toBe(true)
    })
    it("jwt",  async () => {
        const payload: IPayload = {email: "leoakfoadkfok@gmail.com", id: "4328439028423", role: "CASHIER",updatedAt: new Date()}
        const jwt =  JWT.SignJWT(payload)
        expect(typeof jwt).toBe("string")
        const decoded = await JWT.VerifyJWT(jwt)
        expect(decoded).toMatchObject({id: payload.id, email: payload.email, role: payload.role})
    })

    
})