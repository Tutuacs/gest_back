
import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateReport" })
    .put("/:id", ({body, params: {id}}) => {
        return {
            message: `Report with id ${id} updated successfully`,
            data: body,
        };
    });