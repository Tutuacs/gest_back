import { t } from "elysia";
import { reportFieldType } from "../../types";

export const validationSchema = {

    query: t.Optional(
        t.Object({
            skip: t.Optional(t.Number({ minimum: 0 })),
            take: t.Optional(t.Number({ minimum: 1 })),
        })
    ),

    response: {
        200: t.Array(reportFieldType),
    },


    detail: {
        name: "List Report Field Type",
        method: "GET",
        description: "This route should list report field types, based on the optional params skip && take to list by pagination.",
        tags: ["Report Field Type"],
    }
}