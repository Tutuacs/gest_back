import Elysia from "elysia";

export const find = new Elysia({ name: "FindUser" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `User with id ${id} found successfully`,
        };
    });