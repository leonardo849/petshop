import { IsArray, IsDateString, IsEnum, IsUUID } from "class-validator";


export class CreateSchedulingDTO {
    @IsUUID()
    petID!: string

    @IsUUID()
    serviceID!: string

    @IsDateString()
    date!: string

    @IsUUID(4, {each: true})
    workersIds!: string[]
}