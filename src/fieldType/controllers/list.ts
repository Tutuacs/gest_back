import Elysia from "elysia";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListFieldType" })
    .get("/", ({ query: { skip, take } }) => {
        return {
            message: "List field types successfully",
        };
    }, validationSchema);