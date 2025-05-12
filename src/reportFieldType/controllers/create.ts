import Elysia from "elysia";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateReportFieldType" })
    .post("/", ({ body }) => {
        return {
            message: "Report field type created successfully",
            data: body,
        };
    }, validationSchema);