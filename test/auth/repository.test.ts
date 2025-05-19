import { describe, expect, it } from "bun:test";
import { authRepository } from "../../src/auth/repository";

describe("Auth Repository", () => {
    const auth = new authRepository()

    it("should return true if user exists", async () => {
        const user = await auth.existsUser("emailficticio@gmail.com")
        expect(user).toBe(false)
    })

    it("should return null with incorrect credentials", async () => {
        const user = await auth.login("arthur@gmail.com")
        expect(user).toBe(null)
    })

    it("should return null with incorrect credentials", async () => {
        const user = await auth.login("emailficticio@gmail.com")
        expect(user).toBe(null)
    })

    it("should test the validation and creation of hashed password", async () => {
        const pass = await auth.hashPassword("123456")
        expect(pass).toBeString()
        expect(pass).not.toBe("123456")
        const valid = await auth.validPassword("123456", pass)
        expect(valid).toBe(true)
    });

    it("should return the user", async () => {
        const credentials = {
            email: "master@master.com",
            password: "123",
        }

        const exists = await auth.existsUser(credentials.email)
        if (!exists) {
            const user = await auth.register(credentials.email, credentials.password)
            expect(user).not.toBe(null)
            return
        }

        const user = await auth.login(credentials.email)
        expect(user).not.toBe(null)
    })

})