import {IPayload} from "../types/interfaces/payload.js"
import jwt from "jsonwebtoken"

export class JWT {
    static SignJWT(payload: IPayload): string {
        return jwt.sign(payload, process.env.SECRET as string, {expiresIn: "72h"})
    }
}