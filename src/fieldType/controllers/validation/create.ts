import { t } from "elysia";
import { fieldType } from "../../types";

export const validationSchema = {

    body: fieldType,

    response: {

        200: fieldType,

        409: t.Object({
            message: t.String(),
        }),

    },


    detail: {
        name: "Create New Field Type",
        method: "POST",
        description: "This route should create a new field type and return it, if it already exists it should return conflict error",
        tags: ["Field Type"],
    }
}