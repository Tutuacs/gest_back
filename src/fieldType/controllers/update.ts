import Elysia from "elysia";
import { validationSchema } from "./validation/update";
import { authenticator } from "../../jwt";
import { fieldTypeRepository } from "../repository";

export const update = new Elysia({ name: "UpdateEquipamentType" })
    .use(authenticator)
    .decorate("fieldTypeRepository", new fieldTypeRepository())
    .put("/:id", async({ body, params, getInfo, fieldTypeRepository, set }) => {

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

        const exist = await fieldTypeRepository.exist(params.id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Equipament type not found",
            };
        }

        const existCombination = await fieldTypeRepository.existCombination(body.name, body.equipamentTypeId!);

        if (existCombination) {
            set.status = 409;
            return {
                message: "The equipament type already have a field type with this name",
            };
        }

        body.updatedById = token?.user.id;
        const updated = await fieldTypeRepository.update(params.id, body);

        return updated;

    }, validationSchema);