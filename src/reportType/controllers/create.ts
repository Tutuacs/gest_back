import Elysia from "elysia";
import { validationSchema } from "./validation/create";
import { authenticator } from "../../jwt";
import { reportTypeRepository } from "../repository";

export const create = new Elysia({ name: "CreateReportType" })
    .use(authenticator)
    .decorate("reportTypeRepository", new reportTypeRepository())
    .post("/", async ({ body, set, getInfo, reportTypeRepository }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            }
        }

        if (token.user.role !== "MASTER") {
            set.status = 405;
            return {
                message: "",
            }
        }

        const existCombination = await reportTypeRepository.existCombination(body.name, body.equipamentTypeId);

        if (existCombination) {
            set.status = 409;
            return {
                message: "",
            }
        }

        body.updatedById = token.user.id;
        const createdReportType = await reportTypeRepository.create(body);
        
        return createdReportType;

    }, validationSchema);