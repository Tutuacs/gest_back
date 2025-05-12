import { t } from "elysia"
import { id, createdAt, updatedAt, updatedById } from "../common"
import { equipament } from "../equipament/types"

const equipamentId = equipament.properties.id
const name = t.String()
const description = t.String()


export const reportType = t.Object({
    id,
    equipamentId: equipamentId,
    name: name,
    description: description,
    createdAt,
    updatedAt,
    updatedById,
})

export type ReportType = typeof reportType.static