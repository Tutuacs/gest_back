import { t } from "elysia";
import { fieldType } from "../../types";

export const validationSchema = {

    query: t.Optional(
        t.Object({
            skip: t.Optional(t.Number({ minimum: 0 })),
            take: t.Optional(t.Number({ minimum: 1 })),
        })
    ),

    response: {
        200: t.Array(fieldType),
    },

    detail: {
        name: "List Field Types",
        method: "GET",
        description: "This route lists field types, based on the optional params skip && take to list by pagination.",
        tags: ["Field Type"],
    }
}