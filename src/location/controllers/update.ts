import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateLocation" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Location with id ${params.id} updated successfully`,
            data: body,
        };
    });