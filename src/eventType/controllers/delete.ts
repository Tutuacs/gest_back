import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteEventType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `EventType with id ${id} deleted successfully`,
        };
    });