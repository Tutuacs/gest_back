import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";
import { update } from "./controllers/update";
import { connections } from "./controllers/connections";

export const EventTypeHandler = new Elysia({ name: "EventTypeHandler", prefix: "/event-type", tags: ["EventType"] })
    .use(connections)
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)