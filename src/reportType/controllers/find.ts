import Elysia from "elysia";

export const find = new Elysia({ name: "FindReportType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Report type with id ${id} found successfully`,
        };
    });