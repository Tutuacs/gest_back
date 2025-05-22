import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { locationRepository } from "../repository";
import { ROLE } from "../../prisma";
import { validationSchema } from "./validation/delete";

export const delet = new Elysia({ name: "DeleteLocation" })
    .use(authenticator)
    .decorate("locationRepository", new locationRepository())
    .delete("/:id", async ({ params: { id }, set, getInfo, locationRepository }) => {

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

        const exist = await locationRepository.exist(id);

        if (!exist) {
            set.status = 404;
            return {
                message: "Location not found" as string,
            };
        }

        const location = await locationRepository.delete(id);

        return location;
    }, validationSchema);