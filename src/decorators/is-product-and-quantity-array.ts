import { registerDecorator, ValidationOptions } from "class-validator";

export function IsProductAndQuantityArray(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({propertyName, target: object.constructor, name: "is_product_and_quantity_array", options: validationOptions, validator: {
            validate(value: any) {
                return Array.isArray(value) && value.every((element) => {
                    return element.hasOwnProperty("quantity") && element.hasOwnProperty("productID") && typeof element["quantity"] === "number" && typeof element["productID"] === "string" && element["quantity"] > 0
                })
            },
            defaultMessage() {
                return `it isn't a product and quantity array`
            }
        }})
    }
}