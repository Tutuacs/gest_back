import Elysia from "elysia";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindReportType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Report type with id ${id} found successfully`,
        };
    }, validationSchema);