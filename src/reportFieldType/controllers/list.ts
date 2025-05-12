import Elysia from "elysia";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListReportFieldType" })
    .get("/", ({query: {skip, take}}) => {
        return {
            message: "List report field types successfully",
        };
    }, validationSchema);