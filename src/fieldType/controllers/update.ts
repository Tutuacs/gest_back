import Elysia from "elysia";
import { validationSchema } from "./validation/update";

export const update = new Elysia({ name: "UpdateEquipamentType" })
    .put("/:id", ({ body, params }) => {
        return {
            message: `Equipament type with id ${params.id} updated successfully`,
            data: body,
        };
    }, validationSchema);