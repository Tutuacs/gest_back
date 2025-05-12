import Elysia from "elysia";
import { validationSchema } from "./validation/update";

export const update = new Elysia({ name: "UpdateReportType" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Report type with id ${params.id} updated successfully`,
            data: body,
        };
    }, validationSchema);