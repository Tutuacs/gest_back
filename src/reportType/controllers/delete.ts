import Elysia from "elysia";
import { validationSchema } from "./validation/delete";
import { authenticator } from "../../jwt";
import { reportTypeRepository } from "../repository";

export const delet = new Elysia({ name: "DeleteReportType" })
    .use(authenticator)
    .decorate("reportTypeRepository", new reportTypeRepository())
    .delete("/:id", async ({ params: { id }, set, getInfo, reportTypeRepository }) => {

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

        const exist = await reportTypeRepository.exist(id);

        if (!exist) {
            set.status = 404;
            return {
                message: "",
            }
        }

        const deleted = await reportTypeRepository.delete(id);

        return deleted;

    }, validationSchema);