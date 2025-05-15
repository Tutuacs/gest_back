import Elysia from "elysia";
import { validationSchema } from "./validation/delete";
import { authenticator } from "../../jwt";
import { fieldTypeRepository } from "../repository";

export const delet = new Elysia({ name: "DeleteFieldType" })
    .use(authenticator)
    .decorate("fieldTypeRepository", new fieldTypeRepository())
    .delete("/:id", async ({ params: { id }, getInfo, fieldTypeRepository, set }) => {

        const token = await getInfo();

        if (!token) {
            set.status = 401;
            return {
                message: "",
            };
        }

        if (token.user.role != "MASTER") {
            set.status = 405;
            return {
                message: "",
            };
        }

        const exist = await fieldTypeRepository.exist(id);

        if (!exist) {
            set.status = 404;
            return {
                message: "Field type not found",
            };
        }

        const deleted = await fieldTypeRepository.delete(id);

        return deleted;

    }, validationSchema);