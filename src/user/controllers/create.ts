import Elysia from "elysia";

export const create = new Elysia({ name: "CreateUser" })
    .post("/", ({ body }) => {
        return {
            message: "User created successfully",
            data: body,
        };
    });