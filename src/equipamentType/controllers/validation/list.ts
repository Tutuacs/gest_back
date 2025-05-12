import { t } from "elysia";
import { equipamentType } from "../../types";

export const validationSchema = {

    query: t.Optional(
        t.Object({
            skip: t.Optional(t.Number({ minimum: 0})),
            take: t.Optional(t.Number({ minimum: 1})),
        })
    ),

    response: {
        200: t.Array(equipamentType),
    },


    detail: {
        name: "List Equipament Type",
        method: "GET",
        description: "This route should list equipament types, based on the optional params skip && take to list by pagination.",
        tags: ["Equipament Type"],
    }
}