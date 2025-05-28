import bcrypt from 'bcrypt'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { HashMethods } from '../../src/crypto/hash-password' 
import {JWT} from "../../src/crypto/jwt"
import jsonwebtoken from "jsonwebtoken"

vi.mock('bcrypt', async (originalImport) => {
  const actual = await originalImport()
  return {
    //@ts-ignore
    ...actual,
    default: {
       //@ts-ignore
      ...actual,
      hash: vi.fn(),
      compare: vi.fn(),
    }
  }
})

vi.mock("jsonwebtoken", async(originalImport) => {
  const actual = await originalImport()
  return {
    //@ts-ignore
    ...actual,
    default: {
       //@ts-ignore
      ...actual,
      sign: vi.fn(),
      verify: vi.fn(),
    }
  }
})


describe('HashMethods', () => {
  beforeEach(() => {
    process.env.SALTS = '10'
    vi.clearAllMocks()
  })

  it('return hash', async () => {
    const fakeHash = "$2b$04$Mx5oHsv9eCyjweMI9yWBCuapSYmnb7TDteDLvZ8g2M6V9VWf7wlUi";
    (bcrypt.hash  as ReturnType<typeof vi.fn>).mockResolvedValue(fakeHash)

    const result = await HashMethods.HashPassword('batman')

    expect(bcrypt.hash).toHaveBeenCalledWith('batman', Number(process.env.SALTS))
    expect(result).toBe(fakeHash)
  })

  it('return true if password is right', async () => {
    (bcrypt.compare as ReturnType<typeof vi.fn>).mockResolvedValue(true)

    const result = await HashMethods.ComparePasswords('batman', "$2b$04$Mx5oHsv9eCyjweMI9yWBCuapSYmnb7TDteDLvZ8g2M6V9VWf7wlUi")

    expect(bcrypt.compare).toHaveBeenCalledWith('batman', "$2b$04$Mx5oHsv9eCyjweMI9yWBCuapSYmnb7TDteDLvZ8g2M6V9VWf7wlUi")
    expect(result).toBe(true)
  })

  it('return false if bcrypt throws error', async () => {
    (bcrypt.compare as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('fail'))

    const result = await HashMethods.ComparePasswords('password', 'hash')

    expect(result).toBe(false)
  })
})

describe("jwt methods", () => {
  beforeEach(() => {
    process.env.SECRET="BATMANANDROBIN123"
    vi.clearAllMocks()
  })
    it("return jwt", async () => {
    const rightJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzQ1NkBnbWFpbC5jb20iLCJpZCI6Ijk0MDE0MzI4NDIzOTgyMzQiLCJyb2xlIjoiQ1VTVE9NRVIiLCJ1cGRhdGVkQXQiOiIyMDI1LTA1LTI4VDE4OjEyOjI4LjY0MVoiLCJpYXQiOjE3NDg0NTU5NDh9.4n5HdyNCvSWLH-pKLgro6JV9zZhqqvnumhzjcf9ivGg";
    (jsonwebtoken.sign as ReturnType<typeof vi.fn>).mockReturnValue(rightJWT)

    const jwt = await JWT.SignJWT({ email: "123456@gmail.com", id: "9401432842398234", role: "CUSTOMER", updatedAt: new Date() })

    expect(jwt).toBe(rightJWT)
    expect(jsonwebtoken.sign).toHaveBeenCalled()
  })
})
