import { describe, expect, it } from "bun:test"
import { equipamentTypeRepository } from "../../src/equipamentType/repository"
import { EquipamentType } from "../../src/equipamentType/types"

describe("EquipamentTypeRepository Repository", () => {
    const eqType = new equipamentTypeRepository()

    it("should create an equipamentType", async () => {
        const id: number = 1
        const data: EquipamentType = {
            id,
            name: "EquipamentType",
            description: "Description",
        }

        const exists = await eqType.existName(data.name)
        
        if (!exists) {
            const equipamentType = await eqType.create(data)
            expect(equipamentType).not.toBe(null)
            expect(equipamentType!.name).toBe(data.name)
            expect(equipamentType!.description).toBe(data.description)
            return
        }

        // expect(equipamentType).toBe(null)
    })

    it("should find an equipamentType", async () => {
        const id: number = 1
        const equipamentType = await eqType.find(id)
        expect(equipamentType).not.toBe(null)
        expect(equipamentType!.id).toBe(id)
        expect(equipamentType!.name).toBe("EquipamentType")
        expect(equipamentType!.description).toBe("Description")
    })

    it("should list equipamentTypes", async () => {
        const equipamentTypes = await eqType.list({})
        expect(equipamentTypes).not.toBe(null)
        expect(equipamentTypes.length).toBeGreaterThan(0)
    })

    it("should delete an equipamentType", async () => {
        const id: number = 2
        const data: EquipamentType = {
            id: id,
            name: "EquipamentType deleted",
            description: "Description",
        }
        // Create
        const created = await eqType.create(data)
        expect(created).not.toBe(null)
        expect(created!.name).toBe(data.name)
        expect(created!.description).toBe(data.description)
        // Check if it exists
        const exists = await eqType.existName(data.name)
        expect(exists).toBe(true)
        // Check if it was created correctly
        const equipamentType = await eqType.find(id)
        expect(equipamentType).not.toBe(null)
        expect(equipamentType!.id).toBe(id)
        expect(equipamentType!.name).toBe(data.name)
        expect(equipamentType!.description).toBe(data.description)
        // Delete
        const deleted = await eqType.delete(id)
        expect(deleted).not.toBe(null)
        expect(deleted!.id).toBe(id)
        const existsAfterDelete = await eqType.existName(data.name)
        expect(existsAfterDelete).toBe(false)
        const equipamentTypeAfterDelete = await eqType.find(id)
        expect(equipamentTypeAfterDelete).toBe(null)
    })

    it("should update an equipamentType", async () => {
        const id: number = 1
        const data: EquipamentType = {
            name: "EquipamentType Updated",
            description: "Description Updated",
        }

        const equipamentType = await eqType.update(id, data)
        expect(equipamentType).not.toBe(null)
        expect(equipamentType!.id).toBe(id)
        expect(equipamentType!.name).toBe(data.name)
        expect(equipamentType!.description).toBe(data.description)
        const revert = {
            name: "EquipamentType",
            description: "Description",
        }
        await eqType.update(id, revert)
    })

})