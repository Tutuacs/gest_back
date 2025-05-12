import { t } from "elysia";
import { createdAt, id, updatedAt, updatedById } from "../common";

const name = t.String();
const description = t.String();
const type = t.String();
const unvalidOnMoviment = t.Boolean();

export const licenseType = t.Object({
    id,
    name: name,
    description: description,
    type: type,
    unvalidOnMoviment: unvalidOnMoviment,
    createdAt,
    updatedAt,
    updatedById,
})

export type LicenseType = typeof licenseType.static