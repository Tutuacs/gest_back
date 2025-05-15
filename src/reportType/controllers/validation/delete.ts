import { t } from "elysia";
import { reportType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Report Field Type ID", example: 1 }),
    }),

    response: {
        200: reportType,
        404: t.Object({
            message: t.String({default: "Report type Not found"}),
        }),
    },


    detail: {
        name: "Delete Report Type",
        method: "DELETE",
        description: "This route should delete a report type and return it, if it doesn't exist it should return not found error",
        tags: ["Report Type"],
    }
}