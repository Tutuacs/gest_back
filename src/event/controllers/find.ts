import Elysia from "elysia";

export const find = new Elysia({ name: "FindEvent" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Event with id ${id} found successfully`,
        };
    });