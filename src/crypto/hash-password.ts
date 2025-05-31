import bcrypt from "bcrypt"

export class HashMethods {
    static async HashPassword(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, Number(process.env.SALTS as string))
        return hash
    }
    static async ComparePasswords(password: string, hash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, hash)
        } catch (error) {
            return false
        }
    }
}

