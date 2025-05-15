import { t } from "elysia";
import { fieldType } from "../../types";
import { parameters } from "../../../common";

export const validationSchema = {
    params: t.Object({
        id: t.Number({ minimum: 1, description: "Field Type ID", example: 1 }),
    }),

    body: fieldType,

    response: {
        200: fieldType,
        404: t.Object({
            message: t.String({ default: "Field type not found" }),
        }),
        409: t.Object({
            message: t.String({ default: "The equipament type already have a field type with this name" }),
        })
    },

    detail: {
        name: "Update Field Type",
        method: "PUT",
        description: "This route should update a field type and return it, if it doesn't exist it should return not found error",
        tags: ["Field Type"],
        parameters,
    }
}