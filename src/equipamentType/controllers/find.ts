import Elysia from "elysia";

export const find = new Elysia({ name: "FindEquipamentType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Equipament type with id ${id} found successfully`,
        };
    });