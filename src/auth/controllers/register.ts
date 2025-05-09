import Elysia from "elysia";

export const register = new Elysia({ name: "Register" })
    .post("/register", ({ body }) => {
        return {
            message: "User registered successfully",
            data: body,
        };
    })