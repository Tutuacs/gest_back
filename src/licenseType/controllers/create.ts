import Elysia from "elysia";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateLicenseType" })
    .post("/", ({ body }) => {
        return {
            message: "License type created successfully",
            data: body,
        };
    }, validationSchema)