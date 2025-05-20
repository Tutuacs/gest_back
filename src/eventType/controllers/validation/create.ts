import { t } from "elysia";
import { createEventType, eventType } from "../../types";

export const validationSchema = {
    body: createEventType,

    response: {
        200: eventType,
        409: t.Object({
            message: t.String(),
        })
    }

}