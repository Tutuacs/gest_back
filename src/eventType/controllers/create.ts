import Elysia from "elysia";

export const create = new Elysia({ name: "CreateEventType" })
    .post("/", ({ body }) => {
        return {
            message: "EventType created successfully",
            data: body,
        };
    });