import { MaxDecimalsPlaces } from "../decorators/max_decimal_places";
import {  Length } from "class-validator";

export class CreateServiceDTO {
    @Length(10, 100)
    name!: string

    @Length(5, 300)
    description!: string

    @MaxDecimalsPlaces(2)
    price!: number
}