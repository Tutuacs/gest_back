import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteLicenseType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `License type with id ${id} deleted successfully`,
        };
    })