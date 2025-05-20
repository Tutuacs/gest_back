import { t } from "elysia";
import { id, createdAt, updatedAt, updatedById } from "../common";
import { report } from "../report/types";

const reportId = t.Number();
const reportFieldTypeId = t.Number();
const value = t.String();

export const reportFieldValue = t.Object({
    id,
    reportId: reportId,
    reportFieldTypeId: reportFieldTypeId,
    value: value,
    createdAt,
    updatedAt,
    updatedById,
});

export const createReportFieldValue = t.Object({
    reportId: reportId,
    reportFieldTypeId: reportFieldTypeId,
    value: value,
    updatedById,
})

export type ReportFieldValue = typeof reportFieldValue.static;
export type CreateReportFieldValue = typeof createReportFieldValue.static;