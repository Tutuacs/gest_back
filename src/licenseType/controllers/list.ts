import Elysia from "elysia";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListLicenseType" })
    .get("/", ({ query: { skip, take } }) => {
        return {
            message: "List license types successfully",
        };
    }, validationSchema);