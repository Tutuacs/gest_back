import Elysia from "elysia";

export const find = new Elysia({ name: "FindLocation" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Location with id ${id} found successfully`,
        };
    });