import Elysia from "elysia";

export const find = new Elysia({ name: "FindReport" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Report with id ${id} found successfully`,
        };
    });