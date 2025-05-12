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
        name: "",
        method: "GET",
        description: "",
        tags: [""],
    }
}