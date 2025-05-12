import { t } from "elysia";
import { licenseType } from "../licenseType/types";
import { createdAt, id, updatedAt, updatedById } from "../common";

const name = t.String();
const base64 = t.String();

export const pdf = t.Object({
    id,
    name: name,
    base64: base64,
});

export type PDF = typeof pdf.static

const valid = t.Boolean();
const licenseTypeId = licenseType.properties.id;
const from = t.Date();
const to = t.Date();
const pdfId = pdf.properties.id;

export const licenseValue = t.Object({
    id,
    licenseTypeId: licenseTypeId,
    valid: valid,
    from: from,
    to: to,
    pdfId: pdfId,
    createdAt,
    updatedAt,
    updatedById,
});

export type licenseValue = typeof licenseValue.static