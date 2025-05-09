import Elysia from "elysia";

export const create = new Elysia({ name: "CreateReportType" })
    .post("/", ({ body }) => {
        return {
            message: "Report type created successfully",
            data: body,
        };
    });