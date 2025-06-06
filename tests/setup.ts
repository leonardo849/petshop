import dotenv from "dotenv"
import { PrismaClient, Role } from "../generated"


dotenv.config()




export const prisma = new PrismaClient()



export const url = `http://127.0.0.1:${process.env.PORT}` 