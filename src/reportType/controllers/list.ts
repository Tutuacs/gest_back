import Elysia from "elysia";
import { validationSchema } from "./validation/list";
import { authenticator } from "../../jwt";
import { reportTypeRepository } from "../repository";

export const list = new Elysia({ name: "ListReportType" })
    .use(authenticator)
    .decorate("reportTypeRepository", new reportTypeRepository())
    .get("/", async ({ query: { skip, take }, set, getInfo, reportTypeRepository }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            }
        }

        const list = await reportTypeRepository.list({skip, take});

        return list;

    }, validationSchema);