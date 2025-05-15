import { t } from "elysia";
import { parameters } from "../../../common";
import { equipamentType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number({minimum: 1, description: "Equipament Type ID", example: 1}),
    }),

    response: {
        200: equipamentType,

        404: t.Object({
            message: t.String({default: "Equipament Type not found"}),
        }),
    },

    detail: {
        name: "Find Equipament Type",
        method: "GET",
        description: "This route should find an equipament type by id and return it, if it doesn't exist it should return not found error",
        tags: ["Equipament Type"],
        parameters,
    }
}