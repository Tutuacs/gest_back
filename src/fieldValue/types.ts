import { t } from "elysia";
import { createdAt, id, updatedAt, updatedBy } from "../common";
import { fieldType } from "../fieldType/types";

const value = t.String();
const fieldTypeId = fieldType.properties.id;

export const fieldValue = t.Object({
    id,
    fieldTypeId: fieldTypeId,
    value: value,
    createdAt,
    updatedAt,
    updatedBy,
})

export type FieldValue = typeof fieldValue.static