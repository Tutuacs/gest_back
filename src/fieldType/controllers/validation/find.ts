import { t } from "elysia";
import { fieldType } from "../../types";

export const validationSchema = {
    params: t.Object({
        id: t.Number({ minimum: 1, description: "Field Type ID", example: 1 }),
    }),

    response: {
        200: fieldType,
        404: t.Object({
            message: t.String(),
        }),
    },

    detail: {
        name: "",
        method: "GET",
        description: "",
        tags: [""],
    }
}