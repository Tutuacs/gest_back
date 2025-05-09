import Elysia from "elysia";

export const list = new Elysia({ name: "ListEquipament" })
    .get("/", () => {
        return {
            message: "List equipaments successfully",
        };
    });