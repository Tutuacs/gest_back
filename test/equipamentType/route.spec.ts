import { describe, expect, it } from "bun:test";
import { login } from "../../src/auth/controllers/login";
import { equipamentType } from "../../src/equipamentType/types";
let authCookieHeader: string

describe("Equipament Type Controller", () => {
    let authCookie: string

    it("logs in and obtains cookie", async () => {
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
        authCookieHeader = pairs.join("; ")
    })

    it("should return 409 with existing Equipament Type combination", async () => {
        const response = await fetch('http://localhost:3000/equipament-type/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': authCookieHeader,
            },
            body: JSON.stringify({
                name: 'EquipamentType',
                description: 'Description',
            })
        })

        expect(response.status).toBe(409)
        const data = await response.json()
        expect(data).toMatchObject({
            message: expect.any(String),
        })
    })

    it("should return 200 and an Equipament Type", async () => {
        const id: number = 1
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
            headers: {
                'Cookie': authCookieHeader,
            },
        })
        expect(response.status).toBe(200)
        const data = await response.json()

        // {
        //     "equipamentType": {
        //         "id": 1,
        //             "name": "string",
        //                 "description": "string",
        //                     "createdAt": null,
        //                         "updatedAt": null,
        //                             "updatedById": 1
        //     }
        // }
        expect(data).toMatchObject({
            equipamentType: {
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            }
        });
        if (data.equipamentType.updatedById === null) {
            expect(data.equipamentType.updatedById).toBeNull()
        } else {
            expect(data.equipamentType.updatedById).toEqual(expect.any(Number))
        }
    })

    it("should return 404 and a message", async () => {
        const id: number = 2
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
            headers: {
                'Cookie': authCookieHeader,
            },
        })
        expect(response.status).toBe(404)
        const data = await response.json()
        expect(data).toMatchObject({
            message: expect.any(String),
        })
    })

    it("should return 200 and a list of Equipament Type", async () => {

        const response = await fetch(`http://localhost:3000/equipament-type/`, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': authCookieHeader,
            },
        })
        expect(response.status).toBe(200)
        const data = await response.json()
        expect(Array.isArray(data)).toBe(true)
        for (const item of data) {
            // valida os campos obrigatórios
            expect(item).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            })

            // valida updatedById: pode ser null ou number
            if (item.updatedById === null) {
                expect(item.updatedById).toBeNull()
            } else {
                expect(item.updatedById).toEqual(expect.any(Number))
            }
        }
    })

    it("should return 404 and a message on update", async () => {
        const id: number = 2
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': authCookieHeader,
            },
            body: JSON.stringify({
                equipamentType: {
                    name: 'EquipamentType',
                    description: 'Description',
                }
            })
        })

        expect(response.status).toBe(404)
        const data = await response.json()
        expect(data).toMatchObject({
            message: expect.any(String),
        })
    })

    // TODO: create a validation on update to same name

    // it("should return 409 and a message on update", async () => {
    //     const id: number = 3
    //     const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             equipamentType: {
    //                 name: 'EquipamentType',
    //                 description: 'Description',
    //             }
    //         })
    //     })

    //     expect(response.status).toBe(409)
    //     const data = await response.json()
    //     expect(data).toMatchObject({
    //         message: expect.any(String),
    //     })
    // })

})