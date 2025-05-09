import Elysia from "elysia";
import { login } from "./controllers/login";
import { register } from "./controllers/register";

export const AuthHandler = new Elysia({name: "auth", prefix: "/auth", tags: ["Auth"]})
    .use(login)
    .use(register)