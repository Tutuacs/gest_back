import Elysia from "elysia";

export const create = new Elysia({ name: "CreateEquipamentType" })
    .post("/", ({ body }) => {
        return {
            message: "Equipament type created successfully",
            data: body,
        };
    });