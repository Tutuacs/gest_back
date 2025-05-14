import Elysia from "elysia";
import { validationSchema } from "./validation/update";
import { authenticator } from "../../jwt";
import { equipamentTypeRepository } from "../repository";
import { ROLE } from "../../prisma";

export const update = new Elysia({ name: "UpdateEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .put("/:id", async({ body, params, equipamentTypeRepository, getInfo, set }) => {

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

        const exist = await equipamentTypeRepository.exist(params.id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Equipament type not found" as string,
            };
        }

        const canUpdate = await equipamentTypeRepository.canUpdate(params.id, body.name);

        if (!canUpdate) {
            set.status = 409;
            return {
                message: "Equipament type already exists" as string,
            };
        }

        body.updatedById = token?.user.id;

        const updated = await equipamentTypeRepository.update(params.id, body);

        return updated;

    }, validationSchema);