import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer"

export class NodeMailer {
    private transport: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>
    constructor() {
        this.transport = nodemailer.createTransport({
            host: process.env.HOSTEMAIL,
            port: Number(process.env.PORTEMAIL),
            secure: process.env.PORTEMAIL == "465",
            auth: {
                user: process.env.PASSWORDEMAIL,
                pass: process.env.PASSWORDEMAIL
            }

        } as  SMTPTransport.Options)
        console.log("nodemailer is ready!")
    }
    async SendEmail(to: string, subject: string) {
        this.transport.sendMail({from: process.env.USER, to: to, subject})
    }
}