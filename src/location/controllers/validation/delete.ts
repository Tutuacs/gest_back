import { t } from "elysia";
import { location } from "../../types";

export const validationSchema = {
    params: t.Object({
        id: t.Number({ minimum: 1, description: "License Type ID", example: 1 }),
    }),

    response: {

        200: location,

        404: t.Object({
            message: t.String(),
        }),

    },

}