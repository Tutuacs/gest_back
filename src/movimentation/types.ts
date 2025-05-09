import { t } from "elysia";
import { createdAt, id, updatedBy } from "../common";
import { equipament } from "../equipament/types";

const equipamentId = equipament.properties.id;
const date = t.Date();
const description = t.String();

export const movimentation = t.Object({
    id,
    equipamentId: equipamentId, 
    date: date,
    description: description,
    createdAt,
    updatedBy,
});

export type Movimentation = typeof movimentation.static
