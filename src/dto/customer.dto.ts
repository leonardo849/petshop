import { IsEmail,  IsStrongPassword, Length } from "class-validator";

export class CreateCustomerDTO {
    @Length(10, 150)
    name!: string

    @IsStrongPassword()
    password!:string

    @IsEmail()
    email!: string 
}