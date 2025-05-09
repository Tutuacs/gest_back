import Elysia from "elysia";

export const create = new Elysia({ name: "CreateEquipament" })
    .post("/", ({ body }) => {
        return {
            message: "Equipament created successfully",
            data: body,
        };
    });