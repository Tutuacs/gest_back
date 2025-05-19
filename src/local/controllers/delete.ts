import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteLocal" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Local with id ${id} deleted successfully`,
        };
    });