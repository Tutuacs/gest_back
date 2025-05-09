import Elysia from "elysia";

export const list = new Elysia({ name: "ListEquipamentType" })
    .get("/", () => {
        return {
            message: "List equipament types successfully",
        };
    });