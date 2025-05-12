import Elysia from "elysia";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindFieldType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `Field type with id ${id} found successfully`,
        };
    }, validationSchema);