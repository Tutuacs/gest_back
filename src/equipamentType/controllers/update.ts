import Elysia from "elysia";
import { validationSchema } from "./validation/update";
import { authenticator } from "../../jwt";
import { equipamentTypeRepository } from "../repository";

export const update = new Elysia({ name: "UpdateEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .put("/:id", ({ body, params, equipamentTypeRepository, getInfo, set }) => {
        return {
            message: `Equipament type with id ${params.id} updated successfully`,
            data: body,
        };
    }, validationSchema);