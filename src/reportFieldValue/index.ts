import Elysia from "elysia";
import { save } from "./controllers/save";

export const ReportFieldValueHandler = new Elysia({name: "ReportFieldValueHandler", prefix: "/report-field-value", tags: ["Report Field Value"]})
    .use(save)