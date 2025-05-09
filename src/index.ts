import { Elysia } from "elysia";
import { EquipamentHandler } from "./equipament";
import { EquipamentTypeHandler } from "./equipamentType";
import { FieldTypeHandler } from "./fieldType";
import { FieldValueHandler } from "./fieldValue";
import { licenseTypeHandler } from "./licenseType";
import { LicenseValueHandler } from "./licenseValue";
import { MovimentationHandler } from "./movimentation";
import { ReportHandler } from "./report";
import { ReportFieldTypeHandler } from "./reportFieldType";
import { ReportFieldValueHandler } from "./reportFieldValue";
import { UpdaterHandler } from "./updater";
import { UserHandler } from "./user";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { AuthHandler } from "./auth";

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(AuthHandler)
  .use(EquipamentHandler)
  .use(EquipamentTypeHandler)
  .use(FieldTypeHandler)
  .use(FieldValueHandler)
  .use(licenseTypeHandler)
  .use(LicenseValueHandler)
  .use(MovimentationHandler)
  .use(ReportHandler)
  .use(ReportFieldTypeHandler)
  .use(ReportFieldValueHandler)
  .use(UpdaterHandler)
  .use(UserHandler)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
