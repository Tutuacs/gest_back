import Elysia from "elysia";

export const list = new Elysia({ name: "ListUser" })
    .get("/", () => {
        return {
            message: "List users successfully",
        };
    });