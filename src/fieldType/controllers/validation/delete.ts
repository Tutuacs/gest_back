import { t } from "elysia";
import { fieldType } from "../../types";
import { parameters } from "../../../common";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Field Type ID", example: 1 }),
    }),

    response: {
        200: fieldType,
        404: t.Object({
            message: t.String({ default: "Field type not found" }),
        }),
    },

    detail: {
        name: "Delete Field Type",
        method: "DELETE",
        description: "This route should delete a field type and return it, if it doesn't exist it should return not found error",
        tags: ["Field Type"],
        parameters,
    }
}