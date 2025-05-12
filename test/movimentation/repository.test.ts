// import { describe, expect, it } from "bun:test"
// import { Movimentation } from "../../src/movimentation/types"
// import { movimentationRepository } from "../../src/movimentation/repository"

// describe("MovimentationRepository Repository", () => {
//     const movimentation = new movimentationRepository()

//     it("should create a movimentation", async () => {
//         const id: number = 1
//         const data: Movimentation = {
//             id,
//             equipamentId: 1,
//             date: new Date(),
//             description: "Movimentation description",
//             createdAt: new Date(),
//             updatedById: 1,
//         }

//         const exists = await movimentation.exist(id)

//         if (!exists) {
//             const movimentationCreated = await movimentation.create(data)
//             expect(movimentationCreated).not.toBe(null)
//             expect(movimentationCreated!.equipamentId).toBe(data.equipamentId)
//             expect(movimentationCreated!.date).toBe(data.date)
//             expect(movimentationCreated!.description).toBe(data.description)
//             return
//         }
        
//         // expect(movimentationCreated).not.toBe(null)
//         // expect(movimentationCreated).toBe(null)
//     })

//     it("should find a movimentation", async () => {
//         const id: number = 1
//         const movimentationFound = await movimentation.find(id)
//         expect(movimentationFound).not.toBe(null)
//         expect(movimentationFound!.id).toBe(id)
//         expect(movimentationFound!.equipamentId).toBe(1)
//         expect(movimentationFound!.date).toBeInstanceOf(Date)
//         expect(movimentationFound!.description).toBe("Movimentation description")
//     })

//     it("should list movimentations", async () => {
//         const movimentations = await movimentation.list({})
//         expect(movimentations).not.toBe(null)
//         expect(movimentations.length).toBeGreaterThan(0)
//     })

//     it("should delete a movimentation", async () => {
//         const id: number = 2
//         const data: Movimentation = {
//             id,
//             equipamentId: 1,
//             date: new Date(),
//             description: "Movimentation deleted",
//             createdAt: new Date(),
//             updatedById: 1,
//         }
//         // Create
//         const created = await movimentation.create(data)
//         expect(created).not.toBe(null)
//         expect(created!.equipamentId).toBe(data.equipamentId)
//         expect(created!.date).toBe(data.date)
//         expect(created!.description).toBe(data.description)
//         // Check if it exists
//         const exists = await movimentation.exist(id)
//         expect(exists).toBe(true)
//         // Check if it was created correctly
//         const movimentationFound = await movimentation.find(id)
//         expect(movimentationFound).not.toBe(null)
//         expect(movimentationFound!.id).toBe(id)
//     })

//     it("should update a movimentation", async () => {
//         const id: number = 1
//         const data: Movimentation = {
//             id,
//             equipamentId: 1,
//             date: new Date(),
//             description: "Movimentation updated",
//             createdAt: new Date(),
//             updatedById: 1,
//         }
//         // Update
//         const updated = await movimentation.update(id, data)
//         expect(updated).not.toBe(null)
//         expect(updated!.id).toBe(id)
//         expect(updated!.equipamentId).toBe(data.equipamentId)
//         expect(updated!.date).toBe(data.date)
//         expect(updated!.description).toBe(data.description)
//         // Check if it was updated correctly
//         const movimentationFound = await movimentation.find(id)
//         expect(movimentationFound).not.toBe(null)
//         expect(movimentationFound!.id).toBe(id)
//         expect(movimentationFound!.equipamentId).toBe(data.equipamentId)
//         expect(movimentationFound!.date).toBe(data.date)
//         expect(movimentationFound!.description).toBe(data.description)
//         // Revert
//         await movimentation.update(id, {
//             equipamentId: 1,
//             date: new Date(),
//             description: "Movimentation description",
//             createdAt: new Date(),
//             updatedById: 1,
//         })
//     })

// })