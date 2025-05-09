import Elysia from "elysia";

export const find = new Elysia({ name: "FindEquipament" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Equipament with id ${id} found successfully`,
        };
    });