import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { locationRepository } from "../repository";
import { validationSchema } from "./validation/find";

export const find = new Elysia({ name: "FindLocation" })
    .use(authenticator)
    .decorate("locationRepository", new locationRepository())
    .get("/:id", async({ params: { id }, set, getInfo, locationRepository }) => {
        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const exist = await locationRepository.exist(id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Location not found" as string,
            };
        }

        const location = await locationRepository.find(id);

        return location!;
    }, validationSchema);