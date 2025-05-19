import Elysia from "elysia";

export const list = new Elysia({ name: "ListEventType" })
    .get("/", () => {
        return {
            message: "List EventTypes successfully",
        };
    });