import Elysia from "elysia";
import { save } from "./controllers/create";

export const FieldValueHandler = new Elysia({name: "FieldValueHandler", prefix: "/field-value", tags: ["Field Value"]})
    .use(save)
    // .use(delet)
    // .use(find)
    // .use(list)
    // .use(update)