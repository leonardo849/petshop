import { MaxDecimalsPlaces } from "../decorators/max_decimal_places.js";
import { IsOptional, Length, Min } from "class-validator";

export class CreateProductDTO {
    @Length(3, 40)
    name!: string;

    @Length(3, 250)
    description!: string;

    @MaxDecimalsPlaces(2)
    price!: number;

    @Min(1)
    quantity!: number;
}

export class UpdateOneProductQuantityDTO {
    @MaxDecimalsPlaces(2)
    quantity!: number
}

export class UpdateProductDTO {
    @IsOptional()
    @Length(3, 40)
    name?: string;

    @IsOptional()
    @Length(3, 250)
    description?: string;

    @IsOptional()
    @MaxDecimalsPlaces(2)
    price?: number;
}