import Elysia from "elysia";

export const list = new Elysia({ name: "ListReport" })
    .get("/", () => {
        return {
            message: "List reports successfully",
        };
    });