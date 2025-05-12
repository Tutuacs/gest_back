import { t } from "elysia";
import { id, createdAt, updatedAt, updatedById } from "../common";
import { FIELD_TYPES } from "../prisma";

const reportTypeId = t.Number();
const name = t.String();
const description = t.Union([t.String(), t.Null()]);
const type = t.Enum(FIELD_TYPES);
const optional = t.Boolean();

export const reportFieldType = t.Object({
    id,
    reportTypeId: reportTypeId,
    name: name,
    description: description,
    type: type,
    optional: optional,
    createdAt,
    updatedAt,
    updatedById,
});

export type ReportFieldType = typeof reportFieldType.static;