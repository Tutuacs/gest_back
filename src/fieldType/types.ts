import { t } from "elysia";
import { createdAt, FIELD_TYPES, id, updatedAt, updatedBy } from "../common";

const name = t.String()
const type = t.Enum(FIELD_TYPES)
const optional = t.Boolean()

export const fieldType = t.Object({
    id,
    name: name,
    type: type,
    optional: optional,
    createdAt,
    updatedAt,
    updatedBy,
});

export type FieldType = typeof fieldType.static