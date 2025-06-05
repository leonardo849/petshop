import { IsDate, IsDateString, IsNumber, IsString, IsUUID, Length } from "class-validator";

export class CreatePetDTO {
    @Length(3, 30)
    name!: string

    @IsString()
    species!: string

    @Length(3, 20)
    race!: string

    @IsDateString()
    dateOfBirth!: string

    @IsNumber()
    weight!: number
}