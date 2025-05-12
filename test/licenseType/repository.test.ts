import { describe, expect, it } from "bun:test"
import { LicenseType } from "../../src/licenseType/types"
import { licenseTypeRepository } from "../../src/licenseType/repository"

describe("LicenseTypeRepository Repository", () => {
    const licenseType = new licenseTypeRepository()

    it("should create a licenseType", async () => {
        const id: number = 1
        const data: LicenseType = {
            name: "LicenseType",
            description: "LicenseType description",
            type: "STRING",
            unvalidOnMoviment: false,
        }

        const exists = await licenseType.exist(id)
        
        if (!exists) {
            const licenseTypeCreated = await licenseType.create(data)
            expect(licenseTypeCreated).not.toBe(null)
            expect(licenseTypeCreated!.name).toBe(data.name)
            expect(licenseTypeCreated!.description).toBe(data.description)
            expect(licenseTypeCreated!.type).toBe(data.type)
            expect(licenseTypeCreated!.unvalidOnMoviment).toBe(data.unvalidOnMoviment)
            return
        }
        
        // expect(licenseTypeCreated).not.toBe(null)
        // expect(licenseTypeCreated).toBe(null)
    })

    it("should find a licenseType", async () => {
        const id: number = 1
        const licenseTypeFound = await licenseType.find(id)
        expect(licenseTypeFound).not.toBe(null)
        expect(licenseTypeFound!.id).toBe(id)
        expect(licenseTypeFound!.name).toBe("LicenseType")
        expect(licenseTypeFound!.description).toBe("LicenseType description")
        expect(licenseTypeFound!.type).toBe("STRING")
        expect(licenseTypeFound!.unvalidOnMoviment).toBe(false)
    })

    it("should list licenseTypes", async () => {
        const licenseTypes = await licenseType.list({})
        expect(licenseTypes).not.toBe(null)
        expect(licenseTypes.length).toBeGreaterThan(0)
    })

    it("should delete a licenseType", async () => {
        const id: number = 2
        const data: LicenseType = {
            id,
            name: "LicenseType deleted",
            description: "LicenseType deleted description",
            type: "STRING",
            unvalidOnMoviment: false,
        }
        // Create
        const created = await licenseType.create(data)
        expect(created).not.toBe(null)
        expect(created!.name).toBe(data.name)
        expect(created!.description).toBe(data.description)
        expect(created!.type).toBe(data.type)
        expect(created!.unvalidOnMoviment).toBe(data.unvalidOnMoviment)

        // Delete
        const deleted = await licenseType.delete(id)
        expect(deleted).not.toBe(null)
        expect(deleted.id).toBe(id)
    })

    it("should update a licenseType", async () => {
        const id: number = 1
        const data: LicenseType = {
            id,
            name: "LicenseType updated",
            description: "LicenseType updated description",
            type: "STRING",
            unvalidOnMoviment: false,
        }
        // Update
        const updated = await licenseType.update(id, data)
        expect(updated).not.toBe(null)
        expect(updated!.name).toBe(data.name)
        expect(updated!.description).toBe(data.description)
        expect(updated!.type).toBe(data.type)
        expect(updated!.unvalidOnMoviment).toBe(data.unvalidOnMoviment)
        // Check if it was updated correctly
        const updatedCheck = await licenseType.find(id)
        expect(updatedCheck).not.toBe(null)
        expect(updatedCheck!.name).toBe(data.name)
        expect(updatedCheck!.description).toBe(data.description)
        expect(updatedCheck!.type).toBe(data.type)
        expect(updatedCheck!.unvalidOnMoviment).toBe(data.unvalidOnMoviment)
        // Revert
        await licenseType.update(id, {
            name: "LicenseType",
            description: "LicenseType description",
            type: "STRING",
            unvalidOnMoviment: false,
        })
    })

})
