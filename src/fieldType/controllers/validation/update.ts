import { t } from "elysia";
import { fieldType } from "../../types";

export const validationSchema = {
    params: t.Object({
        id: t.Number({ minimum: 1, description: "Field Type ID", example: 1 }),
    }),

    body: fieldType,

    response: {
        200: fieldType,
        404: t.Object({
            message: t.String(),
        }),
        409: t.Object({
            message: t.String(),
        })
    },

    detail: {
        name: "Update Field Type",
        method: "PUT",
        description: "This route should update a field type and return it, if it doesn't exist it should return not found error",
        tags: ["Field Type"],
    }
}