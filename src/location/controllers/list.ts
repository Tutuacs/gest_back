import Elysia from "elysia";

export const list = new Elysia({ name: "ListLocation" })
    .get("/", () => {
        return {
            message: "List Locations successfully",
        };
    });