import Elysia from "elysia";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindReportFieldType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Report field type with id ${id} found successfully`,
        };
    }, validationSchema);