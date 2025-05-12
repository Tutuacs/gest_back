import Elysia from "elysia";
import { validationSchema } from "./validation/update";

export const update = new Elysia({ name: "UpdateLicenseType" })
    .put("/:id", ({ params: { id }, body }) => {
        return {
            message: `License type with id ${id} updated successfully`,
            data: body,
        };
    }, validationSchema);