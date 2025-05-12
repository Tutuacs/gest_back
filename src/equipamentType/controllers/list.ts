import Elysia, { getResponseSchemaValidator } from "elysia";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListEquipamentType" })
    .get("/", ({query: { skip, take}}) => {
        return {
            message: "List equipament types successfully",
        };
    }, validationSchema);