import Elysia from "elysia";
import { validationSchema } from "./validation/create";
import { authenticator } from "../../jwt";
import { fieldTypeRepository } from "../repository";

export const create = new Elysia({ name: "CreateFieldType" })
    .use(authenticator)
    .decorate("fieldTypeRepository", new fieldTypeRepository())
    .post("/", async({ body, getInfo, fieldTypeRepository, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        if (token.user.role != "MASTER") {
            set.status = 405;
            return {
                message: "",
            };
        }

        const existCombination = await fieldTypeRepository.existCombination(body.name, body.equipamentTypeId);

        if (existCombination) {
            set.status = 409;
            return {
                message: "The equipament type already have a field type with this name",
            };
        }

        body.updatedById = token?.user.id;
        const newFieldType = await fieldTypeRepository.create(body);

        return newFieldType;

    }, validationSchema);