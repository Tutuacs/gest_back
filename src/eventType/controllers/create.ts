import Elysia from "elysia";
import { validationSchema } from "./validation/create";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { ROLE } from "../../prisma";

export const create = new Elysia({ name: "CreateEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .post("/", async({ body, eventTypeRepository, getInfo, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        if (token.user.role != ROLE.MASTER) {
            set.status = 405;
            return {
                message: "",
            }
        }

        const exist = await eventTypeRepository.existCombination(body.name, body.equipamentTypeId);

        if (exist) {
            set.status = 409;
            return {
                message: "Event type already exists" as string,
            };
        }

        const eventType = await eventTypeRepository.create(body);

        return eventType;

    }, validationSchema);