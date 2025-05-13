import { describe, expect, it } from "bun:test";
import { jwtPayloadSchema } from "../../src/jwt/type";

describe("Auth Controller", () => {

    it("should return 200 with valid credentials", async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'admin@admin.com',
                password: '123'
            })
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toMatchObject({
            user: expect.any(Object),
        });
    });

    it("should return 401 with invalid credentials", async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'emailficticio@gmail.com',
                password: '123456'
            })
        });

        expect(response.status).toBe(401);
        const data = await response.json();
        expect(data).toMatchObject({
            message: expect.any(String),
        });
    });

    it("should return 409 with existing user", async () => {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'admin@admin.com',
                password: '123'
            })
        });

        expect(response.status).toBe(409);
        const data = await response.json();
        expect(data).toMatchObject({
            message: expect.any(String),
        });
    });
})