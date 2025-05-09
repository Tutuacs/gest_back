import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteUser" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `User with id ${id} deleted successfully`,
        };
    });