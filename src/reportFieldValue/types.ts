import { t } from "elysia";
import { id, createdAt, updatedAt, updatedBy } from "../common";
import { report } from "../report/types";

const reportId = report.properties.id;
const reportFieldTypeId = t.String();
const value = t.String();

export const reportFieldValue = t.Object({
    id,
    reportId: reportId,
    reportFieldTypeId: reportFieldTypeId,
    value: value,
    createdAt,
    updatedAt,
    updatedBy,
});