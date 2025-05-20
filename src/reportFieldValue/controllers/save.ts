import Elysia from "elysia";
import { validationSchema } from "./validation/save";
import { authenticator } from "../../jwt";
import { reportFieldRepository } from "../repository";

export const save = new Elysia({ name: "SaveField" })
    .use(authenticator)
    .decorate("reportFieldRepository", new reportFieldRepository())
    .post("/", async ({ body, getInfo, reportFieldRepository, set }) => {

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

        const existCombination = await reportFieldRepository.existField(body.reportFieldTypeId, body.reportId);
        
        body.updatedById = token?.user.id;
        if (existCombination == null) {
            const field = await reportFieldRepository.create(body);
            
            return {
                message: `field created, id: ${field.id}`,
            };
        }
        
        const newFieldType = await reportFieldRepository.update(existCombination, body);

        return {
                message: `field updated, id: ${newFieldType.id}`,
            };

    }, validationSchema);