import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteReport" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Report with id ${id} deleted successfully`,
        };
    });