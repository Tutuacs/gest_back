import { t } from "elysia";
import { reportFieldType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Report Field Type ID", example: 1 }),
    }),

    response: {
        200: reportFieldType,
        404: t.Object({
            message: t.String(),
        }),
    },


    detail: {
        name: "Delete Report Field Type",
        method: "DELETE",
        description: "This route should delete a report field type and return it, if it doesn't exist it should return not found error",
        tags: ["Report Field Type"],
    }
}