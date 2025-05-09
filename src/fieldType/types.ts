import { t } from "elysia";
import { createdAt, id, updatedAt, updatedBy } from "../common";

const name = t.String()
const type = t.String()
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