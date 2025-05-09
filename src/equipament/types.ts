import { t } from "elysia";
import { equipamentType } from "../equipamentType/types";
import { id, createdAt, updatedAt, updatedBy } from "../common";

const pk2 = t.Optional(t.Number());
const pk3 = t.Optional(t.Number());
const pk4 = t.Optional(t.Number());
const status = t.Optional(t.String());
const location = t.Optional(t.String());
const name = t.String();
const description = t.String();
const equipamentTypeId = equipamentType.properties.id;

export const equipament = t.Object({
    id,
    pk2: pk2,
    pk3: pk3,
    pk4: pk4,
    equipamentTypeId: equipamentTypeId,
    status: status,
    name: name,
    location: location,
    description: description,
    createdAt,
    updatedAt,
    updatedBy,
})