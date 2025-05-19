import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateEvent" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Event with id ${params.id} updated successfully`,
            data: body,
        };
    });