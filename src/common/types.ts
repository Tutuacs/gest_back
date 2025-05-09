import { t } from "elysia";

export const id = t.Optional(t.Number());
export const updatedAt = t.Optional(t.Date());
export const updatedBy = t.Optional(t.Number());
export const createdAt = t.Date();