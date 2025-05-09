import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteLicenseValue" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `License value with id ${id} deleted successfully`,
        };
    });