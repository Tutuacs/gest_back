import Elysia from "elysia";
import { authenticator } from "../../jwt";
import { locationRepository } from "../repository";
import { ROLE } from "../../prisma";
import { validationSchema } from "./validation/create";

export const create = new Elysia({ name: "CreateLocation" })
    .use(authenticator)
    .decorate("locationRepository", new locationRepository())
    .post("/", async ({ body, set, getInfo, locationRepository }) => {

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

        const exist = await locationRepository.existCombination(body.block, body.room);

        if (exist) {
            set.status = 409;
            return {
                message: "Event type already exists" as string,
            };
        }

        return {
            message: "Location created successfully",
            data: body,
        };
    }, validationSchema);