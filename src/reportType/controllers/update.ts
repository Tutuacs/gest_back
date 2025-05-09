import Elysia from "elysia";

export const update = new Elysia({ name: "UpdateReportType" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Report type with id ${params.id} updated successfully`,
            data: body,
        };
    });