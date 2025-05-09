import Elysia from "elysia";
import { create } from "./controllers/create";
import { update } from "./controllers/update";
import { list } from "./controllers/list";
import { find } from "./controllers/find";
import { delet } from "./controllers/delete";

export const LicenseValueHandler = new Elysia({name: "LicenseValueHandler", prefix: "/license-value", tags: ["License Value"]})
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)