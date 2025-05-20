import { t } from "elysia";
import { EQUIPAMENT_STATUS } from "../prisma";
import { id, createdAt, updatedAt, updatedById } from "../common";

const name = t.String();
const description = t.Union([t.String(), t.Null()]);
const equipamentTypeId = t.Number();
const changeEquipamentStatusTo = t.Optional(t.Enum(EQUIPAMENT_STATUS));

export const createEventType = t.Object({
    name,
    description: t.String(),
    equipamentTypeId,
    changeEquipamentStatusTo,
});
//   LicenseType
//   id                Int            @id @default(autoincrement())
//   name              String
//   unvalidOnMoviment Boolean        @default(false)
//   type              String
//   description       String?
//   createdAt         DateTime       @default(now())
//   updatedAt         DateTime       @updatedAt
//   updatedBy         User?          @relation(fields: [updatedById], references: [id])
//   updatedById       Int?
//   EquipamentType    EquipamentType @relation(fields: [equipamentTypeId], references: [id])
//   equipamentTypeId  Int

//   ReportType
//   id               Int               @id @default(autoincrement())
//   name             String
//   description      String?
//   createdAt        DateTime          @default(now())
//   updatedAt        DateTime          @updatedAt
//   updatedBy        User?             @relation(fields: [updatedById], references: [id])
//   updatedById      Int?
//   EquipamentType   EquipamentType    @relation(fields: [equipamentTypeId], references: [id])
//   equipamentTypeId Int
//   Report           Report[]
//   reportFieldType  ReportFieldType[]


const unvalidOnMoviment = t.Boolean();
const type = t.String();

const LicenseType = t.Object({
    id,
    name,
    unvalidOnMoviment,
    description,
});

const ReportType = t.Object({
    id,
    name,
    description,
});

export const eventType = t.Object({
    id,
    name,
    equipamentTypeId,
    changeEquipamentStatusTo: t.Optional(t.Union([t.Enum(EQUIPAMENT_STATUS), t.Null()])),
    activateLicenses: t.Optional(t.Array(LicenseType)),
    deactivateLicenses: t.Optional(t.Array(LicenseType)),
    activateReports: t.Optional(t.Array(ReportType)),
    deactivateReports: t.Optional(t.Array(ReportType)),
    description,
    createdAt,
    updatedAt,
    updatedById,
})



export type CreateEventType = typeof createEventType.static;
export type EventType = typeof eventType.static;