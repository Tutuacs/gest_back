import { t } from "elysia";
import { createEquipamentType, equipamentType } from "../../types";
import { parameters } from "../../../common";

export const validationSchema = {

    body: createEquipamentType,

    response: {

        200: equipamentType,

        409: t.Object({
            message: t.String({default: "Already exists an equipament type with this name"}),
        })

    },

    detail: {
        name: "Create New Equipament Type",
        method: "POST",
        description: "This rout should create a new equipament type and return it, if it already exists it should return conflict error",
        tags: ["Equipament Type"],
        parameters,
    }

}