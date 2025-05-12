import { t } from "elysia";
import { ROLE } from "../prisma";
import { id, createdAt, updatedAt, updatedById } from "../common";

const name = t.String();
const email = t.String();
const password = t.String();
const role = t.Enum(ROLE);

export const user = t.Object({
    id,
    name: name,
    email: email,
    password: password,
    role: role,
    createdAt,
    updatedAt,
    updatedById,
});

export type User = typeof user.static;