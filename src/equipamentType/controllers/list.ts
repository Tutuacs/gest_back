import Elysia, { getResponseSchemaValidator } from "elysia";
import { validationSchema } from "./validation/list";
import { authenticator } from "../../jwt";
import { equipamentTypeRepository } from "../repository";

export const list = new Elysia({ name: "ListEquipamentType" })
    .use(authenticator)
    .decorate("equipamentTypeRepository", new equipamentTypeRepository())
    .get("/", async({ query: { skip, take }, equipamentTypeRepository, getInfo, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        const equipamentTypes = await equipamentTypeRepository.list({
            skip,
            take,
        });


        return equipamentTypes;

    }, validationSchema);