import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { validationSchema } from "./validation/update";
import { ROLE } from "../../prisma";

export const update = new Elysia({ name: "UpdateEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .put("/:id", async({ body, params: { id }, eventTypeRepository, set, getInfo }) => {

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

        const exist = await eventTypeRepository.exist(id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Event type not found" as string,
            };
        }

        const existCombination = await eventTypeRepository.existCombination(body.name, body.equipamentTypeId);
        if (existCombination) {
            const canUpdate = await eventTypeRepository.canUpdate(id, body.equipamentTypeId, body.name);

            if (!canUpdate) {
                set.status = 409;
                return {
                    message: "Event type already exists" as string,
                };
            }
        }

        const q = {
            ...body,
            updatedById: token?.user.id,
        }

        const updated = await eventTypeRepository.update(id, q);

        return updated;

    }, validationSchema);