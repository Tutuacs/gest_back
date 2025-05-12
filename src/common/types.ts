import { t } from "elysia";

export const id = t.Optional(t.Number());
export const createdAt = t.Optional(t.Date());
export const updatedAt = t.Optional(t.Date());
export const updatedById = t.Optional(t.Number());