import Elysia from "elysia";

export const list = new Elysia({ name: "ListLocal" })
    .get("/", () => {
        return {
            message: "List Locals successfully",
        };
    });