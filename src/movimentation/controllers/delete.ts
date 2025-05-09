import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteMovimentation" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Movimentation with id ${id} deleted successfully`,
        };
    });