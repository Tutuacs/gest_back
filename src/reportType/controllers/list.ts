import Elysia from "elysia";

export const list = new Elysia({ name: "ListReportType" })
    .get("/", () => {
        return {
            message: "List report types successfully",
        };
    });