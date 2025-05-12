import Elysia from "elysia";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteLicenseType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `License type with id ${id} deleted successfully`,
        };
    }, validationSchema)