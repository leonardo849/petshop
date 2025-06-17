import {isThereDuplicate} from "../../src/helpers/check-duplicate"

describe("test helpers", () => {
    it("check-duplicate expect false", async () => {
        const array: {name: string}[] = [{name: "123"}, {name: "456"}]
        const result = isThereDuplicate(array, ((element) => element.name))
        expect(result).toBe(false)
    })
    it("check-duplicate expect true", () => {
        const array: number[] = [0, 3, 5, 6, 3]
        const result = isThereDuplicate(array, (element) => element)
        expect(result).toBe(true)
    })
})