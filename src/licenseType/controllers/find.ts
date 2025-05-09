import Elysia from "elysia";

export const find = new Elysia({ name: "FindLicenseType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `License type with id ${id} found successfully`,
        };
    });