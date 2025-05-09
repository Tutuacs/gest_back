import Elysia from "elysia";

export const create = new Elysia({ name: "CreateReportFieldType" })
    .post("/", ({ body }) => {
        return {
            message: "Report field type created successfully",
            data: body,
        };
    });