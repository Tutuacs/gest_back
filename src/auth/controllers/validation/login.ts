import { t } from "elysia";
import { credentials } from "../../types";
import { ROLE } from "../../../prisma";

const userResponse = t.Object({
    id: t.Optional(t.Number()),
    email: t.String(),
    name: t.String(),
    role: t.Enum(ROLE),
});

export const validationSchema = {

    body: credentials,

    response: {
        200: t.Union([
            t.Object({
                user: userResponse,
            }),
            t.Cookie({
                auth: t.String(),
            }, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            }),
        ]),

        401: t.Object({
            message: t.String(),
        }),

    },

    detail: {
        name: "Login",
        method: "POST",
        description: "This route should login a user and return a token, if the user is not found or the password is incorrect it should return a 401 error",
        tags: ["Auth"],
    },

}