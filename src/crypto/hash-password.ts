import bcrypt from "bcrypt"

export async function HashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, Number(process.env.SALTS as string))
    return hash
}