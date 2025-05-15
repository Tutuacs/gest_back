import { t } from "elysia";
import { id, createdAt, updatedAt, updatedById } from "../common";
import { FIELD_TYPES } from "../prisma";

// Base simple types
const name = t.String({default: ""});
const description = t.String({default: ""});

// FieldType schema
const fieldType = t.Object({
  id,
  name,
  type: t.Enum(FIELD_TYPES),
  optional: t.Boolean(),
  max: t.Union([description, t.Null()]),
  min: t.Union([description, t.Null()]),
  createdAt,
  updatedAt,
  updatedById,
  equipamentTypeId: id,
});

// LicenseType schema
const licenseType = t.Object({
  id,
  name,
  unvalidOnMoviment: t.Boolean(),
  type: t.String(),
  description: t.Union([description, t.Null()]),
  createdAt,
  updatedAt,
  updatedById: t.Union([t.Number(), t.Null()]),
  equipamentTypeId: id,
});

// ReportType schema
const reportType = t.Object({
  id,
  name,
  description: t.Union([description, t.Null()]),  // allow null descriptions
  createdAt,
  updatedAt,
  updatedById,
  equipamentTypeId: id,
});

// Create DTO for EquipamentType (input)
export const createEquipamentType = t.Object({
  name,
  description,
});

// Full EquipamentType schema (output)
export const equipamentType = t.Object({
  id,
  name,
  description: t.Union([description, t.Null()]),
  createdAt,
  updatedAt,
  updatedById,
  fieldType: t.Optional(t.Array(fieldType)),
  licenseType: t.Optional(t.Array(licenseType)),
  reportType: t.Optional(t.Array(reportType)),
});

export type EquipamentType = typeof equipamentType.static;
export type CreateEquipamentType = typeof createEquipamentType.static;
