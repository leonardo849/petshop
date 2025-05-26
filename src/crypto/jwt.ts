import { request } from "http"
import {IPayload} from "../types/interfaces/payload.js"
import jwt from "jsonwebtoken"

export class JWT {
    static SignJWT(payload: IPayload): string {
        return jwt.sign(payload, process.env.SECRET as string, {expiresIn: "72h"})
    }
    static async  VerifyJWT(token: string): Promise<IPayload> {
        try {
            const tokenWithoutBearer = token.replace("Bearer ", "")
            const payload = await jwt.verify(tokenWithoutBearer, process.env.SECRET as string) as IPayload
            return payload
        } catch (error) {
            throw new Error("jwt is invalid")
        }
    }
}