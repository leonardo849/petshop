import { MaxDecimalsPlaces } from "../decorators/max_decimal_places.js";
import {  IsOptional, Length } from "class-validator";

export class CreateServiceDTO {
    @Length(3, 30)
    name!: string

    @Length(5, 300)
    description!: string

    @MaxDecimalsPlaces(2)
    price!: number
}

export class UpdateServiceDTO {
    @IsOptional()
    @Length(5, 300)
    description?: string

    @IsOptional()
    @MaxDecimalsPlaces(2)
    price?: number
}