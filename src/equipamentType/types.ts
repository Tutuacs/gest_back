import { t } from "elysia";
import { id, createdAt, updatedAt, updatedById } from "../common";

const name = t.String();
const description = t.String();

export const equipamentType = t.Object({
    id,
    name: name,
    description: description,
    createdAt,
    updatedAt,
    updatedById,
});

export type EquipamentType = typeof equipamentType.static;