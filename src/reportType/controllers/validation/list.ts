import { t } from "elysia";
import { reportType } from "../../types";

export const validationSchema = {

    query: t.Optional(
        t.Object({
            skip: t.Optional(t.Number({ minimum: 0 })),
            take: t.Optional(t.Number({ minimum: 1 })),
        })
    ),

    response: {
        200: t.Array(reportType),
    },

    detail: {
        name: "List Report Type",
        method: "GET",
        description: "This route should list report types, based on the optional params skip && take to list by pagination.",
        tags: ["Report Type"],
    }
}