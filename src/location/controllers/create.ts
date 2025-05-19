import Elysia from "elysia";

export const create = new Elysia({ name: "CreateLocation" })
    .post("/", ({ body }) => {
        return {
            message: "Location created successfully",
            data: body,
        };
    });