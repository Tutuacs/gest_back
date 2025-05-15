import Elysia from "elysia";
import { validationSchema } from "./validation/find";
import { authenticator } from "../../jwt";
import { fieldTypeRepository } from "../repository";

export const find = new Elysia({ name: "FindFieldType" })
    .use(authenticator)
    .decorate("fieldTypeRepository", new fieldTypeRepository())
    .get("/:id", async({ params: { id }, getInfo, fieldTypeRepository, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const exist = await fieldTypeRepository.exist(id);
        if (!exist) {
            set.status = 404;
            return {
                message: "",
            };
        }

        const fieldType = await fieldTypeRepository.find(id);

        return fieldType!;

    }, validationSchema);