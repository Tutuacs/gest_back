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
import { authenticator } from "./jwt";
import { ReportTypeHandler } from "./reportType";

const app = new Elysia({ name: "Main" })
  .use(cors())
  .use(swagger())
  .use(authenticator)
  .use(AuthHandler)
  .use(EquipamentHandler)
  .use(EquipamentTypeHandler)
  .use(FieldTypeHandler)
  .use(FieldValueHandler)
  .use(licenseTypeHandler)
  .use(LicenseValueHandler)
  .use(MovimentationHandler)
  .use(ReportHandler)
  .use(ReportTypeHandler)
  .use(ReportFieldTypeHandler)
  .use(ReportFieldValueHandler)
  .use(UpdaterHandler)
  .use(UserHandler)
  .get("/me", async ({ getInfo, cookie: { auth, userInfo } }) => {
    const info = await getInfo();

    return {
      user: info?.user,
      userInfo: JSON.parse(userInfo.value ?? "{}"),
    }
  })
  .get("/logout", async({ logOut }) => {
    await logOut();

    return {
      message: "Logged out",
    }
  })


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
