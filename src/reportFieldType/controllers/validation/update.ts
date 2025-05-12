import { t } from "elysia";
import { reportFieldType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Report Field Type ID", example: 1 }),
    }),

    body: reportFieldType,

    response: {
        200: reportFieldType,
        404: t.Object({
            message: t.String(),
        }),
        409: t.Object({
            message: t.String(),
        })
    },


    detail: {
        name: "Report Field Type",
        method: "PUT",
        description: "This route should",
        tags: ["Report Field Type"],
    }
}