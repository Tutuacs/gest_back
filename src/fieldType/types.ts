import { t } from "elysia";
import { createdAt, id, updatedAt, updatedById } from "../common";
import { FIELD_TYPES } from "../prisma";

const name = t.String()
// const description = t.String()
const type = t.Enum(FIELD_TYPES)
const equipamentTypeId = t.Union([t.Number({ minimum: 1 }), t.Null()])
const optional = t.Boolean()
const max = t.Optional(
    t.Union([
        t.String({ description: "Max value/Max length" }),
        t.Null(),
    ])
)
const min = t.Optional(
    t.Union([
        t.String({ description: "Min value/Min length" }),
        t.Null(),
    ])
)

export const fieldType = t.Object({
    id,
    name: name,
    // description: description,
    type: type,
    optional: optional,
    equipamentTypeId: equipamentTypeId,
    max: max,
    min: min,
    createdAt,
    updatedAt,
    updatedById,
});

export type FieldType = typeof fieldType.static