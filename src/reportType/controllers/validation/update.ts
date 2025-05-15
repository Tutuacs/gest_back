import { t } from "elysia";
import { reportType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Report Field Type ID", example: 1 }),
    }),

    body: reportType,

    response: {
        200: reportType,
        404: t.Object({
            message: t.String({default: "Report type Not found"}),
        }),
        409: t.Object({
            message: t.String({default: "Report type with this name already exists on the selected equipament type"}),
        })
    },


    detail: {
        name: "Report Type",
        method: "PUT",
        description: "This route should update a report type and return it, if it doesn't exist it should return not found error",
        tags: ["Report Type"],
    }
}