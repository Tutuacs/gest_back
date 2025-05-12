import { t } from "elysia";
import { licenseType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "License Type ID", example: 1 }),
    }),

    body: licenseType,

    response: {
        200: licenseType,
        409: t.Object({
            message: t.String(),
        }),
    },

    detail: {
        name: "Update License Type",
        method: "PUT",
        description: "This route should update a license type and return it, if it already exists it should return conflict error",
        tags: ["License Type"],
    }
}