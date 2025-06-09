import { IsEmail,  IsOptional,  IsStrongPassword, Length } from "class-validator";

export class CreateCustomerDTO {
    @Length(10, 150)
    name!: string

    @IsStrongPassword()
    password!:string

    @IsEmail()
    email!: string 

    @Length(10, 150)
    address!: string
}

export class UpdateCustomerDTO {
    @IsOptional()
    @IsEmail()
    email?: string 

    @IsOptional()
    @Length(10, 150)
    name?: string

    @IsOptional()
    @Length(10, 150)
    address?: string
}