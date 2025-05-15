import { t } from "elysia"
import { id, createdAt, updatedAt, updatedById } from "../common"

const equipamentTypeId = t.Number()
const name = t.String()
const description = t.Union([t.String(), t.Null()])


export const reportType = t.Object({
    id,
    equipamentTypeId: equipamentTypeId,
    name: name,
    description: description,
    createdAt,
    updatedAt,
    updatedById,
})

export type ReportType = typeof reportType.static