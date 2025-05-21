import { t } from "elysia";
import { eventType } from "../../types";

enum TYPE {
    ACTIVATE = "activate",
    DEACTIVATE = "deactivate",
}

enum OBJECT {
    LICENSE = "license",
    REPORT = "report",
}

enum ACTION {
    CONNECT = "connect",
    DISCONNECT = "disconnect",
}

export const validationSchema = {
    params: t.Object({
        id: t.Number(),
        eventTypeId: t.Number(),
        action: t.Enum(ACTION),
        object: t.Enum(OBJECT),
        type: t.Enum(TYPE),
    }),

    response: {
        200: t.Object({
            message: t.String(),
        }),
        406: t.Object({
            message: t.String(),
        }),
    }

}