import { t } from "elysia";
import { createFieldValue } from "../../types";


const message = t.Object({
    message: t.String(),
})

export const validationSchema = {
    body: createFieldValue,

    response: {
        200: message,
        201: message,
    }


}