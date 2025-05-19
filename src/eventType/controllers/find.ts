import Elysia from "elysia";

export const find = new Elysia({ name: "FindEventType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `EventType with id ${id} found successfully`,
        };
    });