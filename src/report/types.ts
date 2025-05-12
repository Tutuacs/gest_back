import { t } from "elysia"
import { id, createdAt, updatedBy, updatedAt } from "../common";
import { equipament } from "../equipament/types";

const equipamentId = equipament.properties.id;
const name = t.String();
const date = t.Date();
const description = t.String();

export const report = t.Object({
    id,
    equipamentId: equipamentId,
    name: name,
    date: date,
    description: description,
    createdAt,
    updatedAt,
    updatedById,
})