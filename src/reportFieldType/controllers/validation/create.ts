import { t } from "elysia";
import { reportFieldType } from "../../types";

export const validationSchema = {

    body: reportFieldType,

    response: {
        200: reportFieldType,
        409: t.Object({
            message: t.String(),
        }),
    },

    detail: {
        name: "Create Report Field Type",
        method: "POST",
        description: "This route should create a new report field type and return it, if it already exists it should return conflict error",
        tags: ["Report Field Type"],
    }
}