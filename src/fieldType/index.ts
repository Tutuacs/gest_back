import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";
import { update } from "./controllers/update";

export const FieldTypeHandler = new Elysia({ name: "FieldTypeHandler", prefix: "/field-type", tags: ["Field Type"] })
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    .use(update)