import { IsEmail, IsEnum, IsNumber, IsOptional, IsStrongPassword, Length } from "class-validator";
import { Role } from "../../generated/client.js";
import { MaxDecimalsPlaces } from "../decorators/max_decimal_places.js";


export class CreateWorkerDTO {
    @Length(10, 150)
    name!: string

    @IsEnum(Role)
    role!: Role

    @IsEmail()
    email!: string

    @IsNumber()
    @MaxDecimalsPlaces(2)
    salary!: number

    @IsStrongPassword()
    password!: string
}

export class LoginWorkerDTO  {
    @IsEmail()
    email!: string

    @IsStrongPassword()
    password!: string
}

export class UpdateWorkerDTO {
    @IsOptional()
    @Length(10, 150)
    name?: string

    @IsOptional()
    @IsEnum(Role)
    role?: Role

    @IsOptional()
    @IsNumber()
    @MaxDecimalsPlaces(2)
    salary?: number
}