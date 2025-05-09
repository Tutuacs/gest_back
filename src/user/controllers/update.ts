import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateUser" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `User with id ${params.id} updated successfully`,
            data: body,
        };
    });