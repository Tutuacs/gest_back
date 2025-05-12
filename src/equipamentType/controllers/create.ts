import Elysia from "elysia";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateEquipamentType" })
    .post("/", ({ body }) => {
        return {
            message: "Equipament type created successfully",
            data: body,
        };
    }, validationSchema);