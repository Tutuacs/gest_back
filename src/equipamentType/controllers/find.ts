import Elysia from "elysia";
import { validationSchema } from "./validation/find";
import { authenticator } from "../../jwt";
import { equipamentTypeRepository } from "../repository";

export const find = new Elysia({ name: "FindEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .get("/:id", async({ params: { id }, equipamentTypeRepository, getInfo, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const exist = await equipamentTypeRepository.exist(id);
        if (!exist) {
            set.status = 404;
            return {
                message: "Equipament type not found" as string,
            };
        }

        const equipamentType = await equipamentTypeRepository.find(id);

        return equipamentType!;

    }, validationSchema);