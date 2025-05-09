import Elysia from "elysia";
import { create } from "./controllers/create";
import { delet } from "./controllers/delete";
import { find } from "./controllers/find";
import { list } from "./controllers/list";

export const MovimentationHandler = new Elysia({name: "MovimentationHandler", prefix: "/movimentation", tags: ["Movimentation"]})
    .use(create)
    .use(delet)
    .use(find)
    .use(list)
    // ! .use(update) PROBABLY NOT NEEDED