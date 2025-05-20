import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .get("/", async({ query: { skip, take }, eventTypeRepository, getInfo, set }) => {
        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const eventTypes = await eventTypeRepository.list({
            skip,
            take,
        });


        return eventTypes;

    }, validationSchema);