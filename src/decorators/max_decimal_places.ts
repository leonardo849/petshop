import { registerDecorator, ValidationOptions } from "class-validator";

export function MaxDecimalsPlaces(max: number, validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({propertyName: propertyName, target: object.constructor, name: "max_decimal_places", options: validationOptions,constraints: [max] ,
            validator: {
                validate(value, validationArguments) {
                    if (typeof value !== "number") return false
                    const numberInString = value.toString()
                    const pointIndex = numberInString.indexOf(".")
                    if (pointIndex === -1) return true
                    const decimalPart = numberInString.slice(pointIndex + 1)
                    if (decimalPart.length > max) return false
                    return true
                },
                defaultMessage(validationArguments) {
                    return `maximum number of decimal places is ${max}`
                },
            }
        })
    }
}