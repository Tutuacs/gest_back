import { t } from "elysia";
import { createdAt, id, updatedById } from "../common";

const equipamentId = t.Number();
const date = t.Date();
const description = t.String();

export const movimentation = t.Object({
    id,
    equipamentId: equipamentId, 
    date: date,
    description: description,
    createdAt,
    updatedById,
});

export type Movimentation = typeof movimentation.static
