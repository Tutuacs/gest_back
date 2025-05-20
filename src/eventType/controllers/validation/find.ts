import { t } from "elysia";
import { eventType } from "../../types";

export const validationSchema = {
    params: t.Object({
        id: t.Number(),
    }),

    response: {
        200: eventType,
        404: t.Object({
            message: t.String(),
        }),
    }

}