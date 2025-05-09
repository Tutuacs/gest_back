import Elysia from "elysia";

export const find = new Elysia({ name: "FindReportFieldType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Report field type with id ${id} found successfully`,
        };
    });