import Elysia from "elysia";

export const find = new Elysia({ name: "FindMovimentation" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Movimentation with id ${id} found successfully`,
        };
    });