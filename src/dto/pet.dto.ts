import { IsDate, IsDateString, IsNumber, IsString, IsUppercase, IsUUID, Length, Min } from "class-validator";

export class CreatePetDTO {
    @IsUppercase()
    @Length(3, 30)
    name!: string

    @IsString()
    species!: string

    @Length(3, 20)
    race!: string

    @IsDateString()
    dateOfBirth!: string

    @IsNumber()
    @Min(0)
    weight!: number
}