import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateLicenseType" })
    .put("/:id", ({ params: { id }, body }) => {
        return {
            message: `License type with id ${id} updated successfully`,
            data: body,
        };
    });