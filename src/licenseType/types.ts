import { t } from "elysia";
import { createdAt, id, updatedAt, updatedBy } from "../common";

const name = t.String();
const description = t.String();
const type = t.String();
const unvalidOnMovimentation = t.Boolean();

export const licenseType = t.Object({
    id,
    name: name,
    description: description,
    type: type,
    unvalidOnMovimentation: unvalidOnMovimentation,
    createdAt,
    updatedAt,
    updatedBy,
})

export type LicenseType = typeof licenseType.static