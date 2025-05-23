import { IsEmail, IsEnum, IsNumber, IsOptional, IsStrongPassword, Length } from "class-validator";
import { Role } from "../../generated/client.js";
import { MaxDecimalsPlaces } from "../decorators/max_decimal_places.js";


export class CreateWorkerDTO {
    @Length(10, 150)
    name: string

    @IsEnum(Role)
    role: Role

    @IsEmail()
    email: string

    @IsNumber()
    @MaxDecimalsPlaces(2)
    salary: number

    @IsStrongPassword()
    password: string

    constructor(name: string, role: Role, email: string, salary: number, password: string) {
        this.name = name
        this.role = role
        this.email = email
        this.salary = salary
        this.password = password
    }
}