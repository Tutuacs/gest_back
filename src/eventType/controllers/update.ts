import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateEventType" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `EventType with id ${params.id} updated successfully`,
            data: body,
        };
    });