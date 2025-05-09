
import Elysia from "elysia";

export const list = new Elysia({ name: "ListReport" })
    .put("/:id", ({body, params: {id}}) => {
        return {
            message: `Report with id ${id} updated successfully`,
            data: body,
        };
    });