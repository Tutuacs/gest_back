import { t } from "elysia";
import { licenseType } from "../../types";

export const validationSchema = {

    body: licenseType,

    response: {
        200: licenseType,
        409: t.Object({
            message: t.String(),
        }),
    },

    detail: {
        name: "Create New License Type",
        method: "POST",
        description: "This route should create a new license type and return it, if it already exists it should return conflict error",
        tags: ["License Type"],
    }
}