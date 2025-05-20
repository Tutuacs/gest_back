import { t } from "elysia";
import { createEventType, eventType } from "../../types";

export const validationSchema = {

    params: t.Object({
        id: t.Number(),
    }),

    body: createEventType,

    response: {
        200: eventType,
        404: t.Object({
            message: t.String(),
        }),
        409: t.Object({
            message: t.String(),
        }),
    }

}