import Elysia from "elysia";
import { validationSchema } from "./validation/create";
import { authenticator } from "../../jwt";
import { fieldRepository } from "../repository";

export const save = new Elysia({ name: "SaveField" })
    .use(authenticator)
    .decorate("fieldRepository", new fieldRepository())
    .post("/", async ({ body, getInfo, fieldRepository, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        if (token.user.role == "USER") {
            set.status = 405;
            return {
                message: "",
            };
        }

        const existCombination = await fieldRepository.existField(body.fieldTypeId, body.equipamentId);
        
        body.updatedById = token?.user.id;
        if (existCombination == null) {
            const field = await fieldRepository.create(body);
            
            return {
                message: `field created, id: ${field.id}`,
            };
        }
        
        const newFieldType = await fieldRepository.update(existCombination, body);

        return {
                message: `field updated, id: ${newFieldType.id}`,
            };

    }, validationSchema);