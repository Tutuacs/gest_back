import { t } from "elysia";
import { createdAt, id, updatedAt, updatedById } from "../common";

const value = t.String();
const fieldTypeId = t.Number();
const equipamentId = t.Number();

export const createFieldValue = t.Object({
    value: value,
    fieldTypeId: fieldTypeId,
    equipamentId: equipamentId,
    updatedById,
})

export const fieldValue = t.Object({
    id,
    value: value,
    fieldTypeId: fieldTypeId,
    equipamentId: equipamentId,
    createdAt,
    updatedAt,
    updatedById,
})

export type FieldValue = typeof fieldValue.static
export type CreateFieldValue = typeof createFieldValue.static