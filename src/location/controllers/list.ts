import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { locationRepository } from "../repository";
import { validationSchema } from "./validation/list";

export const list = new Elysia({ name: "ListLocation" })
    .use(authenticator)
    .decorate("locationRepository", new locationRepository())
    .get("/", async ({ query: { skip, take }, set, getInfo, locationRepository }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const eventTypes = await locationRepository.list({
            skip,
            take,
        });

        return eventTypes;

    }, validationSchema);