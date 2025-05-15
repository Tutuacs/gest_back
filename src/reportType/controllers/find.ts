import Elysia from "elysia";
import { validationSchema } from "./validation/find";
import { authenticator } from "../../jwt";
import { reportTypeRepository } from "../repository";

export const find = new Elysia({ name: "FindReportType" })
    .use(authenticator)
    .decorate("reportTypeRepository", new reportTypeRepository())
    .get("/:id", async({ params: { id }, set, getInfo, reportTypeRepository }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            }
        }

        const exist = await reportTypeRepository.exist(id);

        if (!exist) {
            set.status = 404;
            return {
                message: "",
            }
        }

        const find = await reportTypeRepository.find(id);

        return find!;

    }, validationSchema);