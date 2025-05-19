import Elysia from "elysia";

export const list = new Elysia({ name: "ListEvent" })
    .get("/", () => {
        return {
            message: "List Events successfully",
        };
    });