import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";
import { update } from "./controllers/update";

export const ReportTypeHandler = new Elysia({name: "ReportTypeHandler", prefix: "/report-type", tags: ["Report Type"]})
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)