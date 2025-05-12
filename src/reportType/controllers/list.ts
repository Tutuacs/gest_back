import Elysia from "elysia";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListReportType" })
    .get("/", ({ query: { skip, take } }) => {
        return {
            message: "List report types successfully",
        };
    }, validationSchema);