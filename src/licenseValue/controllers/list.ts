import Elysia from "elysia";

export const list = new Elysia({ name: "ListLicenseValue" })
    .get("/", () => {
        return {
            message: "List license values successfully",
        };
    });