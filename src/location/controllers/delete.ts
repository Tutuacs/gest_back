import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteLocation" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Location with id ${id} deleted successfully`,
        };
    });