import Elysia from "elysia";

export const list = new Elysia({ name: "ListLicenseType" })
    .get("/", () => {
        return {
            message: "List license types successfully",
        };
    });