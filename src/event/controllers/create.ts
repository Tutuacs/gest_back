import Elysia from "elysia";

export const create = new Elysia({ name: "CreateEvent" })
    .post("/", ({ body }) => {
        return {
            message: "Event created successfully",
            data: body,
        };
    });