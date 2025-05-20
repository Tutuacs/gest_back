import { t } from "elysia";
import { createReportFieldValue } from "../../types";


const message = t.Object({
    message: t.String(),
})

export const validationSchema = {
    body: createReportFieldValue,

    response: {
        200: message,
        201: message,
    }


}