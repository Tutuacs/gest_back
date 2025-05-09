import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateEquipament" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Equipament with id ${params.id} updated successfully`,
            data: body,
        };
    });