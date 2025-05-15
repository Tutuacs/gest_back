import Elysia from "elysia";
import { validationSchema } from "./validation/list";
import { authenticator } from "../../jwt";
import { fieldTypeRepository } from "../repository";

export const list = new Elysia({ name: "ListFieldType" })
    .use(authenticator)
    .decorate("fieldTypeRepository", new fieldTypeRepository())
    .get("/", async({ query: { skip, take }, getInfo, fieldTypeRepository, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const list = await fieldTypeRepository.list({skip, take});

        return list;

    }, validationSchema);