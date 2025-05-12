import Elysia from "elysia";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteReportType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Report type with id ${id} deleted successfully`,
        };
    }, validationSchema);