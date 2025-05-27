import Fastify from "fastify"
import {Server} from "./server/server.js"
import sensible from '@fastify/sensible';
import dotenv from "dotenv"
import { EmailService } from "./email/nodemailer.js";
import { verifyJWT } from "./server/middlewares/verify-jwt.js";

dotenv.config()



const app = Fastify()
await app.register(sensible)






const server = new Server(app)
server.RunServer(Number(process.env.PORT as string))