import { t } from "elysia";
import { reportType } from "../../types";

export const validationSchema = {

    body: reportType,

    response: {
        200: reportType,
        409: t.Object({
            message: t.String(),
        })
    },

    detail: {
        name: "Create Report Type",
        method: "Post",
        description: "This route should create a new report type and return it, if it already exists it should return conflict error",
        tags: ["Report Type"],
    }
}