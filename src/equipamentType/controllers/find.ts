import Elysia from "elysia";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindEquipamentType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Equipament type with id ${id} found successfully`,
        };
    }, validationSchema);