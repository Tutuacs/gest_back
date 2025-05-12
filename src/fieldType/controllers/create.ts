import Elysia from "elysia";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateFieldType" })
    .post("/", ({ body }) => {
        return {
            message: "Field type created successfully",
            data: body,
        };
    }, validationSchema);