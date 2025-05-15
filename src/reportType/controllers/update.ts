import Elysia from "elysia";
import { validationSchema } from "./validation/update";
import { authenticator } from "../../jwt";
import { reportTypeRepository } from "../repository";

export const update = new Elysia({ name: "UpdateReportType" })
    .use(authenticator)
    .decorate("reportTypeRepository", new reportTypeRepository())
    .put("/:id", async ({ body, params, set, getInfo, reportTypeRepository }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "Unauthorized",
            }
        }

        if (token.user.role !== "MASTER") {
            set.status = 405;
            return {
                message: "",
            }
        }

        const exist = await reportTypeRepository.exist(params.id);

        if (!exist) {
            set.status = 404;
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
        const update = await reportTypeRepository.update(params.id, body);

        return update;

    }, validationSchema);