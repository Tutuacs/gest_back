import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteEquipament" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Equipament with id ${id} deleted successfully`,
        };
    });