import Elysia from "elysia";

export const create = new Elysia({ name: "CreateLocal" })
    .post("/", ({ body }) => {
        return {
            message: "Local created successfully",
            data: body,
        };
    });