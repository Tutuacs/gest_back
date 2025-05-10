import { t } from "elysia";
import { createdAt, id, updatedAt, updatedBy } from "../common";
import { FIELD_TYPES } from "../enums/fieldTypes";

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