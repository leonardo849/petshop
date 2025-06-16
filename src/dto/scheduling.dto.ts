import { IsArray, IsDateString, IsEnum, IsUUID } from "class-validator";
import { Status } from "../../generated/client.js";


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

export class UpdateSchedulingStatusDTO {
    @IsEnum(Status)
    status!: Status
}