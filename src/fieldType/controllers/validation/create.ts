import { t } from "elysia";
import { fieldType } from "../../types";
import { parameters } from "../../../common";
import { FIELD_TYPES } from "../../../prisma";

const createFieldType = t.Object({
    name: t.String({ description: "Field Type Name", example: "Field Type Name" }),
    // description: t.Optional(t.String({ description: "Field Type Description", example: "Field Type Description" })),
    type: t.Enum(FIELD_TYPES, {
        description: "Field Type Type",
        example: FIELD_TYPES.STRING,
    }),
    optional: t.Boolean({ description: "Field Type Optional", example: false }),
    equipamentTypeId: t.Number({ minimum: 1, description: "Equipament Type ID", example: 1 }),
    updatedById: t.Optional(t.Number({ minimum: 1, description: "", example: 1 })),
    max: t.Optional(
        t.Union([
            t.String({ description: "Max value/Max length" }),
            t.Null(),
        ])
    ),
    min: t.Optional(
        t.Union([
            t.String({ description: "Min value/Min length" }),
            t.Null(),
        ])
    ),
})

export const validationSchema = {

    body: createFieldType,

    response: {

        200: fieldType,

        409: t.Object({
            message: t.String({ default: "The equipament type already have a field type with this name" }),
        }),

    },


    detail: {
        name: "Create New Field Type",
        method: "POST",
        description: "This route should create a new field type and return it, if it already exists it should return conflict error",
        tags: ["Field Type"],
        parameters,
    }
}