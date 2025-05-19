import Elysia from "elysia";

export const find = new Elysia({ name: "FindLocal" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Local with id ${id} found successfully`,
        };
    });