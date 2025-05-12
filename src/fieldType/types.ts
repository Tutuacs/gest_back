import { t } from "elysia";
import { createdAt, id, updatedAt, updatedById } from "../common";
import { FIELD_TYPES } from "../prisma";

const name = t.String()
const type = t.Enum(FIELD_TYPES)
const equipamentTypeId = t.Number({minimum: 1})
const optional = t.Boolean()

export const fieldType = t.Object({
    id,
    name: name,
    type: type,
    optional: optional,
    equipamentTypeId: equipamentTypeId,
    createdAt,
    updatedAt,
    updatedById,
});

export type FieldType = typeof fieldType.static