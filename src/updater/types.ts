import { t } from "elysia";
import { user } from "../user/types";
import { licenseValue } from "../licenseValue/types";
import { movimentation } from "../movimentation/types";
import { id, createdAt, updatedAt, updatedBy } from "../common";
import { reportType } from "../reportType/types";
import { equipament } from "../equipament/types";

const userId = user.properties.id;
const equipamentsId = t.Array(equipament.properties.id);
const licensesId = t.Array(licenseValue.properties.id);
const movimentationId = t.Array(movimentation.properties.equipamentId);
const reportId = t.Array(reportType.properties.equipamentId);

export const updater = t.Object({
    id,
    userId: userId,
    equipamentsId: equipamentsId,
    licensesId: licensesId,
    movimentationId: movimentationId,
    reportId: reportId,
    createdAt,
    updatedAt,
    updatedBy,
})