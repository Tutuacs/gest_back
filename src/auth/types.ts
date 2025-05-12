import { t } from "elysia";

const email = t.String({format: "email", description: "User email", example: "nome@gmail.com"});
const password = t.String({example: "minha senha", description: "User password", minLength: 3});

export const credentials = t.Object({
    email: email,
    password: password,
})

export type Credentials = typeof credentials.static;