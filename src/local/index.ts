import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";
import { update } from "./controllers/update";

export const LocalHandler = new Elysia({name: "LocalHandler", prefix: "/local", tags: ["Local"]})
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)