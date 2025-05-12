import Elysia from "elysia";
import { validationSchema } from "./validation/login";

export const login = new Elysia({ name: "Login" })
    .post("/login", ({ body }) => {
        return {
            message: "Login successfully",
            data: body
        };
    }, validationSchema)