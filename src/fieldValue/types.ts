import { t } from "elysia";
import { createdAt, id, updatedAt, updatedById } from "../common";
import { fieldType } from "../fieldType/types";

const value = t.String();
const fieldTypeId = fieldType.properties.id;

export const fieldValue = t.Object({
    id,
    fieldTypeId: fieldTypeId,
    value: value,
    createdAt,
    updatedAt,
    updatedById,
})

export type FieldValue = typeof fieldValue.static