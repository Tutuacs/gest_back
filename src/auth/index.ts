import Elysia from "elysia";

export const AuthHandler = new Elysia({name: "auth", prefix: "/auth", tags: ["Auth"]})