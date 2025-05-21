import Elysia from "elysia";
import { validationSchema } from "./validation/connections";
import { authenticator } from "../../jwt";
import { eventTypeRepository } from "../repository";
import { ROLE } from "../../prisma";

export const connections = new Elysia({ name: "ConnectEventType" })
    .use(authenticator)
    .decorate("eventTypeRepository", new eventTypeRepository())
    .get("/connections/:action/:object/:type/:id/:eventTypeId", async ({ params: { id, object, type, action, eventTypeId }, eventTypeRepository, getInfo, set }) => {

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

        if (object == "license") {

            const relation = await eventTypeRepository.licenseRelation(id, eventTypeId);

            if (!relation) {
                set.status = 406;
                return {
                    message: `The ${object} id cant be ${action} with this event type` as string,
                };
            }

            if (action == "connect") {

                if (type == "activate") {
                    await eventTypeRepository.connectActiveLicense(id, eventTypeId);
                    return {
                        message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
                    }
                }

                await eventTypeRepository.connectDeactivateLicense(id, eventTypeId);
                return {
                    message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
                }

            }

            if (type == "activate") {
                await eventTypeRepository.disconnectActiveLicense(id, eventTypeId);
                return {
                    message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
                }
            }

            await eventTypeRepository.disconnectDeactivateLicense(id, eventTypeId);
            return {
                message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
            }

        }

        const relation = await eventTypeRepository.reportRelation(id, eventTypeId);

        if (!relation) {
            set.status = 406;
            return {
                message: `The ${object} id cant be ${action} with this event type` as string,
            };
        }

        if (action == "connect") {

            if (type == "activate") {
                await eventTypeRepository.connectActiveReport(id, eventTypeId);
                return {
                    message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
                }
            }

            await eventTypeRepository.connectDeactivateReport(id, eventTypeId);
            return {
                message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
            }

        }

        if (type == "activate") {
            await eventTypeRepository.disconnectActiveReport(id, eventTypeId);
            return {
                message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
            }
        }

        await eventTypeRepository.disconnectDeactivateReport(id, eventTypeId);
        return {
            message: `The ${object} with id ${id} was ${action}ed with the event type '${eventTypeId}' on ${type} list` as string,
        }


    }, validationSchema);