import { t } from "elysia";
import { licenseType } from "../../types";

export const validationSchema = {

    query: t.Optional(
        t.Object({
            skip: t.Optional(t.Number({ minimum: 0 })),
            take: t.Optional(t.Number({ minimum: 1 })),
        })
    ),

    response: {
        200: t.Array(licenseType),
    },


    detail: {
        name: "List License Type",
        method: "GET",
        description: "This route should list license types, based on the optional params skip && take to list by pagination.",
        tags: ["License Type"],
    }
}