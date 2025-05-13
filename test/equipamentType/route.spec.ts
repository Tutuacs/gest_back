import { describe, expect, it } from "bun:test";

describe("Equipament Type Controller", () => {
    it("should return 409 with existing Equipament Type combination", async () => {
        const response = await fetch('http://localhost:3000/equipament-type/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`)
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
                updatedById: expect.any(Number)
            }
        })
    })

    it("should return 404 and a message", async () => {
        const id: number = 2
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`)
        expect(response.status).toBe(200)
        const data = await response.json()
        expect(data).toMatchObject({
            message: expect.any(String),
        })
    })

    it("should return 200 and a list of Equipament Type", async () => {

        const response = await fetch(`http://localhost:3000/equipament-type/`)
        expect(response.status).toBe(200)
        const data = await response.json()
        expect(data).toMatchObject([{
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            updatedById: expect.any(Number)
        }])
    })

    it("should return 404 and a message on update", async () => {
        const id: number = 2
        const response = await fetch(`http://localhost:3000/equipament-type/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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