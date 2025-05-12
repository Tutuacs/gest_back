import Elysia from "elysia";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindLicenseType" })
    .get("/:id", ({ params: { id } }) => {
        return {
            message: `License type with id ${id} found successfully`,
        };
    }, validationSchema);