import { IsUUID } from "class-validator";
import { IsProductAndQuantityArray } from "../decorators/is-product-and-quantity-array.js";


export class CreatePurchaseDTO {
    @IsProductAndQuantityArray()
    products!: {productID: string, quantity: number}[]

    @IsUUID()
    customerID!: string
}