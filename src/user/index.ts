import Elysia from "elysia";

export const UserHandler = new Elysia({name: "UserHandler", prefix: "/user", tags: ["User"]})