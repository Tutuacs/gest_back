import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateLocal" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Local with id ${params.id} updated successfully`,
            data: body,
        };
    });