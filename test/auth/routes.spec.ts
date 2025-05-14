import { describe, expect, it } from "bun:test";
import { login } from "../../src/auth/controllers/login";
export let authMaster: string
export let authAdmin: string
export let authUser: string

describe("Auth Controller", () => {


    it("logs in and obtains master cookie", async () => {
        const body = { email: "master@master.com", password: "123" }
        const req = new Request("http://localhost/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: new TextEncoder().encode(JSON.stringify(body))
        })

        const res = await login.handle(req)
        expect(res.status).toBe(200)

        // 1) Grab *all* Set-Cookie headers
        //    - Bun’s Headers object gives you getAll() for this
        const setCookies = res.headers.getAll("Set-Cookie")
        expect(setCookies.length).toBeGreaterThanOrEqual(2)

        // 2) Extract just the name=value from each cookie
        //    (strip off Path=/, HttpOnly, Expires=…, etc)
        const pairs = setCookies.map((cookieStr) => cookieStr.split(";")[0])

        // 3) Join with `; ` for your Cookie header
        authMaster = pairs.join("; ")
    })

    it("logs in and obtains admin cookies", async () => {
        const body = { email: "admin@admin.com", password: "123" }
        const req = new Request("http://localhost/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: new TextEncoder().encode(JSON.stringify(body))
        })

        const res = await login.handle(req)
        expect(res.status).toBe(200)

        // 1) Grab *all* Set-Cookie headers
        //    - Bun’s Headers object gives you getAll() for this
        const setCookies = res.headers.getAll("Set-Cookie")
        expect(setCookies.length).toBeGreaterThanOrEqual(2)

        // 2) Extract just the name=value from each cookie
        //    (strip off Path=/, HttpOnly, Expires=…, etc)
        const pairs = setCookies.map((cookieStr) => cookieStr.split(";")[0])

        // 3) Join with `; ` for your Cookie header
        authAdmin = pairs.join("; ")
    })

    it("logs in and obtains user cookie", async () => {
        const body = { email: "user@user.com", password: "123" }
        const req = new Request("http://localhost/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: new TextEncoder().encode(JSON.stringify(body))
        })

        const res = await login.handle(req)
        expect(res.status).toBe(200)

        // 1) Grab *all* Set-Cookie headers
        //    - Bun’s Headers object gives you getAll() for this
        const setCookies = res.headers.getAll("Set-Cookie")
        expect(setCookies.length).toBeGreaterThanOrEqual(2)

        // 2) Extract just the name=value from each cookie
        //    (strip off Path=/, HttpOnly, Expires=…, etc)
        const pairs = setCookies.map((cookieStr) => cookieStr.split(";")[0])

        // 3) Join with `; ` for your Cookie header
        authUser = pairs.join("; ")
    })


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