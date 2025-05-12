import { describe, expect, it } from "bun:test"
import { ReportType } from "../../src/reportType/types"
import { reportTypeRepository } from "../../src/reportType/repository"

describe("ReportTypeRepository Repository", () => {
    const reportType = new reportTypeRepository()

    it("should create a reportType", async () => {
        const id: number = 1
        const data: ReportType = {
            id,
            name: "ReportType",
            description: "ReportType description",
        }

        const exists = await reportType.exist(id)
        if (!exists) {
            const reportTypeCreated = await reportType.create(data)
            expect(reportTypeCreated).not.toBe(null)
            expect(reportTypeCreated!.name).toBe(data.name)
            expect(reportTypeCreated!.description).toBe(data.description)
            return
        }
    });

    it("should find a reportType", async () => {
        const id: number = 1
        const reportTypeFound = await reportType.find(id)
        expect(reportTypeFound).not.toBe(null)
        expect(reportTypeFound!.id).toBe(id)
        expect(reportTypeFound!.name).toBe("ReportType")
        expect(reportTypeFound!.description).toBe("ReportType description")
    });

    it("should list reportTypes", async () => {
        const reportTypes = await reportType.list({})
        expect(reportTypes).not.toBe(null)
        expect(reportTypes.length).toBeGreaterThan(0)
    })

    it("should delete a reportType", async () => {
        const id: number = 2
        const data: ReportType = {
            id,
            name: "ReportType deleted",
            description: "ReportType deleted description",
        }
        // Create
        const created = await reportType.create(data)
        expect(created).not.toBe(null)
        expect(created!.name).toBe(data.name)
        expect(created!.description).toBe(data.description)
        // Check if it exists
        const exists = await reportType.exist(id)
        expect(exists).toBe(true)
        // Delete
        const deleted = await reportType.delete(id)
        expect(deleted).not.toBe(null)
        expect(deleted!.id).toBe(id)
        expect(deleted!.name).toBe(data.name)
        expect(deleted!.description).toBe(data.description)
        // Check if it was deleted
        const existsAfterDelete = await reportType.exist(id)
        expect(existsAfterDelete).toBe(false)
    });

    it("should update a reportType", async () => {
        const id: number = 1
        const data: ReportType = {
            name: "ReportType updated",
            description: "ReportType updated description",
        }

        const exists = await reportType.exist(id)
        expect(exists).toBe(true)
        if (!exists) {
            const reportTypeUpdated = await reportType.update(id, data)
            expect(reportTypeUpdated).not.toBe(null)
            expect(reportTypeUpdated!.name).toBe(data.name)
            expect(reportTypeUpdated!.description).toBe(data.description)
            // Revert
            await reportType.update(id, {
                name: "ReportType",
                description: "ReportType description",
            })
            return
        }
    })


})