import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateLicenseValue" })
    .put("/:id", ({ params: { id }, body }) => {
        return {
            message: `License value with id ${id} updated successfully`,
            data: body,
        };
    });