import Elysia from "elysia";

export const create = new Elysia({ name: "CreateReport"})
    .post("/", ({ body }) => {
        return {
            message: "Report created successfully",
            data: body,
        };
    });