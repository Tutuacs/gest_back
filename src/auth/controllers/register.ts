import Elysia from "elysia";
import { validationSchema } from "./validation/register";
import { authRepository } from "../repository";

export const register = new Elysia({ name: "Register" })
    .decorate("db", new authRepository())
    .post("/register", async({ set, body, db }) => {
        
        const user = await db.register(body.email, body.password);

        if (!user) {
            set.status = 409;
            return {
                message: "User already exists",
            };
        }

        return {
            user,
        }

        
    }, validationSchema)