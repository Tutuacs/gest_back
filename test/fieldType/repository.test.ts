import { describe, expect, it } from "bun:test"
import { FieldType } from "../../src/fieldType/types"
import { fieldTypeRepository } from "../../src/fieldType/repository"

describe("FieldTypeRepository Repository", () => {
    const fieldType = new fieldTypeRepository()

    it("should create a fieldType", async () => {
        const id: number = 1
        const data: FieldType = {
            name: "FieldType",
            type: "STRING",
            equipamentTypeId: 1,
            optional: false,
        }

        const exists = await fieldType.exist(id)
        if (!exists) {
            const fieldTypeCreated = await fieldType.create(data)
            expect(fieldTypeCreated).not.toBe(null)
            expect(fieldTypeCreated!.name).toBe(data.name)
            expect(fieldTypeCreated!.type).toBe(data.type)
            expect(fieldTypeCreated!.optional).toBe(data.optional)
            return
        }
        
        // expect(fieldTypeCreated).not.toBe(null)
        // expect(fieldTypeCreated).toBe(null)
    })

    it("should find a fieldType", async () => {
        const id: number = 1
        const fieldTypeFound = await fieldType.find(id)
        expect(fieldTypeFound).not.toBe(null)
        expect(fieldTypeFound!.id).toBe(id)
        expect(fieldTypeFound!.name).toBe("FieldType")
        expect(fieldTypeFound!.type).toBe("STRING")
        expect(fieldTypeFound!.optional).toBe(false)
    })

    it("should list fieldTypes", async () => {
        const fieldTypes = await fieldType.list({})
        expect(fieldTypes).not.toBe(null)
        expect(fieldTypes.length).toBeGreaterThan(0)
    })

    it("should delete a fieldType", async () => {
        const id: number = 2
        const data: FieldType = {
            id,
            name: "FieldType deleted",
            type: "STRING",
            equipamentTypeId: 1,
            optional: false,
        }
        // Create
        const created = await fieldType.create(data)
        expect(created).not.toBe(null)
        expect(created!.name).toBe(data.name)
        expect(created!.type).toBe(data.type)
        expect(created!.optional).toBe(data.optional)
        // Check if it exists
        const exists = await fieldType.exist(id)
        expect(exists).toBe(true)
        // Delete
        const deleted = await fieldType.delete(id)
        expect(deleted).not.toBe(null)
        expect(deleted!.id).toBe(id)
        // Check if it was deleted correctly
        const existsAfterDelete = await fieldType.exist(id)
        expect(existsAfterDelete).toBe(false)
    })

    it("should update a fieldType", async () => {
        const id: number = 1
        const data: FieldType = {
            name: "FieldType updated",
            type: "NUMBER",
            equipamentTypeId: 1,
            optional: true,
        }
        // Update
        const updated = await fieldType.update(id, data)
        expect(updated).not.toBe(null)
        expect(updated!.id).toBe(id)
        expect(updated!.name).toBe(data.name)
        expect(updated!.type).toBe(data.type)
        expect(updated!.optional).toBe(data.optional)
        // Revert
        const revert = await fieldType.update(id, {
            name: "FieldType",
            type: "STRING",
            equipamentTypeId: 1,
            optional: false,
        })
        expect(revert).not.toBe(null)
        expect(revert!.id).toBe(id)
        expect(revert!.name).toBe("FieldType")
        expect(revert!.type).toBe("STRING")
        expect(revert!.optional).toBe(false)
    })

})