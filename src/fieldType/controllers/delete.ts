import Elysia from "elysia";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteFieldType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Field type with id ${id} deleted successfully`,
        };
    }, validationSchema);