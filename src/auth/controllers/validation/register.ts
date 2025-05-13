import { t } from "elysia";
import { credentials } from "../../types";
import { ROLE } from "../../../prisma";

const userResponse = t.Object({
    id: t.Optional(t.Number()),
    name: t.String(),
    email: t.String(),
    role: t.Enum(ROLE),
});

export const validationSchema = {
        body: credentials,
    
        response: {
            200: t.Object({
                user: userResponse,
            }),
            409: t.Object({
                message: t.String(),
            }),    
        },
    
        detail: {
            name: "Register",
            method: "POST",
            description: "This route should register a user or return a conflict error if an user with the required email already exists",
            tags: ["Auth"],
        },
}