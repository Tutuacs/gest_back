import { t } from "elysia";
import { reportType } from "../reportType/types";
import { id, createdAt, updatedAt, updatedBy } from "../common";

const reportTypeId = reportType.properties.id;
const name = t.String();
const type = t.String();
const optional = t.Boolean();

export const reportFieldType = t.Object({
    id,
    reportTypeId: reportTypeId,
    name: name,
    type: type,
    optional: optional,
    createdAt,
    updatedAt,
    updatedBy,
});

export type ReportFieldType = typeof reportFieldType.static;