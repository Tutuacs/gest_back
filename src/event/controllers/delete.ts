import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteEvent" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Event with id ${id} deleted successfully`,
        };
    });