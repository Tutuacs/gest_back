import Elysia from "elysia";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateReportType" })
    .post("/", ({ body }) => {
        return {
            message: "Report type created successfully",
            data: body,
        };
    }, validationSchema);