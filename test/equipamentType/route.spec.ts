import { describe, expect, it } from "bun:test";
import { authMaster } from "../auth/routes.spec";

describe("Equipament Type Controller", () => {

    it("should return 409 with existing Equipament Type combination", async () => {
        const response = await fetch('http://localhost:3000/equipament-type/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': authMaster,
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
                'Cookie': authMaster,
            },
        })
        expect(response.status).toBe(200)
        const data = await response.json()

        expect(data).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
        });
        if (data.updatedById === null) {
            expect(data.updatedById).toBeNull()
        } else {
            expect(data.updatedById).toEqual(expect.any(Number))
        }
    })

    it("should return 404 and a message", async () => {
        const id: number = 2
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
            headers: {
                'Cookie': authMaster,
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
                'Cookie': authMaster,
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
                'Cookie': authMaster,
            },
            body: JSON.stringify({
                name: 'EquipamentType',
                description: 'Description',
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