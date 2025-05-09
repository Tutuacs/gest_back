import Elysia from "elysia";

export const create = new Elysia({ name: "CreateLicenseType" })
    .post("/", ({ body }) => {
        return {
            message: "License type created successfully",
            data: body,
        };
    })