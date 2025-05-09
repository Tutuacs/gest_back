import Elysia from "elysia";

export const list = new Elysia({ name: "ListReportFieldType" })
    .get("/", () => {
        return {
            message: "List report field types successfully",
        };
    });