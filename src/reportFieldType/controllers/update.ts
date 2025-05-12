import Elysia from "elysia";
import { validationSchema } from "./validation/update";

export const update = new Elysia({ name: "UpdateReportFieldType" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Report field type with id ${params.id} updated successfully`,
            data: body,
        };
    }, validationSchema);