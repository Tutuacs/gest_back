import Elysia from "elysia";

export const create = new Elysia({ name: "CreateLicenseValue" })
    .post("/", ({ body }) => {
        return {
            message: "License value created successfully",
            data: body,
        };
    })