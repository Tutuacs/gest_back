import { t } from "elysia";
import { credentials } from "../../types";

export const validationSchema = {

    body: credentials,

    response: {
        200: t.Union([
            t.Object({
                message: t.String(),
            }),
            t.Cookie({
                auth: t.String(),
            }, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            })
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