import { t } from "elysia";
import { equipamentType } from "../../types";

export const validationSchema = {

    body: equipamentType,

    response: {

        200: t.Object({
            equipamentType: equipamentType,
        }),

        409: t.Object({
            message: t.String(),
        })

    },

    detail: {
        name: "Create New Equipament Type",
        method: "POST",
        description: "This rout should create a new equipament type and return it, if it already exists it should return conflict error",
        tags: ["Equipament Type"],
    }

}