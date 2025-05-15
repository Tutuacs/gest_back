import Elysia from "elysia";
import { validationSchema } from "./validation/create";
import { authenticator } from "../../jwt";
import { equipamentTypeRepository } from "../repository";
import { ROLE } from "../../prisma";

export const create = new Elysia({ name: "CreateEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .post("/", async ({ set, body, equipamentTypeRepository, getInfo }) => {
        
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
        
        const exist = await equipamentTypeRepository.existName(body.name);
        
        if (exist) {
            set.status = 409;
            return {
                message: "Equipament type already exists" as string,
            };
        }
        const q = {
            ...body,
            updatedById: token?.user.id,
        }

        const equipamentType = await equipamentTypeRepository.create(q);

        return equipamentType;

    }, validationSchema);