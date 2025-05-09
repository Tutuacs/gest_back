import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";
import { update } from "./controllers/update";

export const UserHandler = new Elysia({name: "UserHandler", prefix: "/user", tags: ["User"]})
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)