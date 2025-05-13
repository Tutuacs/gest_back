import { t } from "elysia"
import { id } from "../common";
import { ROLE } from "../prisma";

const name = t.String();
const email = t.String();
const password = t.Optional(t.String());
const role = t.Enum(ROLE);

const user = t.Object({
    id,
    name: name,
    email: email,
    role: role,
});

export const jwtPayloadSchema = t.Object({
    user: user,
})

export type jwtPayloadSchema = typeof jwtPayloadSchema.static;