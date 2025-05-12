import Elysia from "elysia";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteEquipamentType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Equipament type with id ${id} deleted successfully`,
        };
    }, validationSchema); 