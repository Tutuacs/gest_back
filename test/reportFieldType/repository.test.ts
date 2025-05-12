import { describe, expect, it } from "bun:test"
import { ReportFieldType } from "../../src/reportFieldType/types"
import { reportFieldTypeRepository } from "../../src/reportFieldType/repository"

describe("ReportFieldTypeRepository Repository", () => {
    const reportFieldType = new reportFieldTypeRepository()

    it("should create a reportFieldType", async () => {
        const id: number = 1
        const data: ReportFieldType = {
            id,
            name: "ReportFieldType",
            description: "ReportFieldType description",
            optional: false,
            reportTypeId: 1,
            type: "STRING",
        }

        const exists = await reportFieldType.exist(id)
        if (!exists) {
            const reportFieldTypeCreated = await reportFieldType.create(data)
            expect(reportFieldTypeCreated).not.toBe(null)
            expect(reportFieldTypeCreated!.name).toBe(data.name)
            expect(reportFieldTypeCreated!.description).toBe(data.description)
            expect(reportFieldTypeCreated!.optional).toBe(data.optional)
            expect(reportFieldTypeCreated!.reportTypeId).toBe(data.reportTypeId)
            return
        }
    });

    it("should find a reportFieldType", async () => {
        const id: number = 1
        const reportFieldTypeFound = await reportFieldType.find(id)
        expect(reportFieldTypeFound).not.toBe(null)
        expect(reportFieldTypeFound!.id).toBe(id)
        expect(reportFieldTypeFound!.name).toBe("ReportFieldType")
        expect(reportFieldTypeFound!.description).toBe("ReportFieldType description")
        expect(reportFieldTypeFound!.optional).toBe(false)
        expect(reportFieldTypeFound!.reportTypeId).toBe(1)
    })

    it("should list reportFieldTypes", async () => {
        const reportFieldTypes = await reportFieldType.list({})
        expect(reportFieldTypes).not.toBe(null)
        expect(reportFieldTypes.length).toBeGreaterThan(0)
    })

    it("should delete a reportFieldType", async () => {
        const id: number = 2
        const data: ReportFieldType = {
            id,
            name: "ReportFieldType deleted",
            description: "ReportFieldType deleted description",
            optional: false,
            reportTypeId: 1,
            type: "STRING",
        }
        // Create
        const created = await reportFieldType.create(data)
        expect(created).not.toBe(null)
        expect(created!.name).toBe(data.name)
        expect(created!.description).toBe(data.description)
        expect(created!.optional).toBe(data.optional)
        expect(created!.reportTypeId).toBe(data.reportTypeId)
        // Delete
        const deleted = await reportFieldType.delete(id)
        expect(deleted).not.toBe(null)
        expect(deleted!.id).toBe(id)
        const existsAfterDelete = await reportFieldType.exist(id)
        expect(existsAfterDelete).toBe(false)
    })

    it("should update a reportFieldType", async () => {
        const id: number = 1
        const data: ReportFieldType = {
            id,
            name: "ReportFieldType updated",
            description: "ReportFieldType updated description",
            optional: true,
            reportTypeId: 1,
            type: "BOOLEAN",
        }

        // Update
        const reportFieldTypeUpdated = await reportFieldType.update(id, data)
        expect(reportFieldTypeUpdated).not.toBe(null)
        expect(reportFieldTypeUpdated!.id).toBe(id)
        expect(reportFieldTypeUpdated!.name).toBe(data.name)
        expect(reportFieldTypeUpdated!.description).toBe(data.description)
        expect(reportFieldTypeUpdated!.optional).toBe(data.optional)
        expect(reportFieldTypeUpdated!.reportTypeId).toBe(data.reportTypeId)
        expect(reportFieldTypeUpdated!.type).toBe(data.type)
        // Revert
        await reportFieldType.update(id, {
            name: "ReportFieldType",
            description: "ReportFieldType description",
            optional: false,
            reportTypeId: 1,
            type: "STRING",
        })
    });

})