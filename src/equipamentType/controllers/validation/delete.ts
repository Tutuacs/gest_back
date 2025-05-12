import { t } from "elysia";
import { equipamentType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({minimum: 1, description: "Equipament Type ID", example: 1}),
    }),

    response: {

        200: t.Object({
            equipamentType: equipamentType
        }),

        404: t.Object({
            message: t.String(),
        })

    },

    detail: {
        name: "Delete Equipament Type",
        method: "DELETE",
        description: "This route should delete an equipament type and return it, if it doesn't exist it should return not found error",
        tags: ["Equipament Type"],
    }
}