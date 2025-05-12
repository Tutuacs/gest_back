import { t } from "elysia";
import { credentials } from "../../types";

export const validationSchema = {
        body: credentials,
    
        response: {
            200: t.Object({
                message: t.String(),
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