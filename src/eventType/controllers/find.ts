import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .get("/:id", async({ params: { id }, eventTypeRepository, set, getInfo }) => {
        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const exist = await eventTypeRepository.exist(id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Event type not found" as string,
            };
        }

        const evetType = await eventTypeRepository.find(id);

        return evetType!;
    }, validationSchema);