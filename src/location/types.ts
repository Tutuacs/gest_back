import { t } from "elysia";
import { id, createdAt, updatedAt, updatedById } from "../common";


const block = t.String();
const room = t.String();
const description = t.String({default: ""});

export const createLocation = t.Object({
    block,
    room,
    description,
});

export const location = t.Object({
    id,
    block,
    room,
    description,
    createdAt,
    updatedAt,
    updatedById,
});

export type CreateLocation = typeof createLocation.static;
export type Location = typeof location.static;
