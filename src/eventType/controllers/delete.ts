import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { ROLE } from "../../prisma";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .delete("/:id", async({ params: { id }, eventTypeRepository, set, getInfo }) => {
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

        const eventType = await eventTypeRepository.delete(id);

        return eventType;
    }, validationSchema);