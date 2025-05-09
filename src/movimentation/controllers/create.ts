import Elysia from "elysia";

export const create = new Elysia({ name: "CreateMovimentation" })
    .post("/", ({ body }) => {
        return {
            message: "Movimentation created successfully",
            data: body,
        };
    });