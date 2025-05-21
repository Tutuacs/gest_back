import { t } from "elysia";
import { createLocation, location } from "../../types";

export const validationSchema = {

    body: createLocation,

    response: {
        200: location,
        409: t.Object({
            message: t.String(),
        }),
    },

}