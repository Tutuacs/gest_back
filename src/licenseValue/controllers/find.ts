import Elysia from "elysia";

export const find = new Elysia({ name: "FindLicenseValue" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `License value with id ${id} found successfully`,
        };
    });