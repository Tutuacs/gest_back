import Elysia from "elysia";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteReportFieldType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Report field type with id ${id} deleted successfully`,
        };
    }, validationSchema);