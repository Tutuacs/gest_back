import Elysia from "elysia";
import { validationSchema } from "./validation/register";

export const register = new Elysia({ name: "Register" })
    .post("/register", ({ body }) => {
        return {
            message: "User registered successfully",
            data: body,
        };
    }, validationSchema)