import Elysia from "elysia";

export const login = new Elysia({ name: "Login" })
    .post("/login", ({ body }) => {
        return {
            message: "Login successfully",
            data: body
        };
    })