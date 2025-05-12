import { t } from "elysia";
import { equipamentType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({ minimum: 1, description: "Equipament Type ID", example: 1 }),
    }),

    body: t.Object({
        equipamentType: equipamentType,
    }),

    response: {
        200: t.Object({
            equipamentType: equipamentType,
        }),
        404: t.Object({
            message: t.String(),
        }),
        409: t.Object({
            message: t.String(),
        })
    },


    detail: {
        name: "Update Equipament Type",
        method: "PUT",
        description: "This route should update an equipament type and return it, if it doesn't exist it should return not found error",
        tags: ["Equipament Type"],
    }
}