import { t } from "elysia";
import { licenseType } from "../../types";

export const validationSchema = {
    params: t.Object({
        id: t.Number({ minimum: 1, description: "License Type ID", example: 1 }),
    }),

    response: {

        200: licenseType,

        404: t.Object({
            message: t.String(),
        }),

    },

    detail: {
        name: "Delete License Type",
        method: "DELETE",
        description: "This route should delete a license type and return it, if it doesn't exist it should return not found error",
        tags: ["License Type"],
    }
}