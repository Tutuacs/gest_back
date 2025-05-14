import Elysia from "elysia";
import { validationSchema } from "./validation/delete";
import { equipamentTypeRepository } from "../repository";
import { authenticator } from "../../jwt";
import { ROLE } from "../../prisma";

export const delet = new Elysia({ name: "DeleteEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .delete("/:id", async ({ params: { id }, equipamentTypeRepository, getInfo, set }) => {
        
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
        
        const exist = await equipamentTypeRepository.exist(id);

        if (!exist) {
            set.status = 404;
            return {
                message: "Equipament type not found" as string,
            };
        }

        const equipamentType = await equipamentTypeRepository.delete(id);

        return equipamentType;

    }, validationSchema); 