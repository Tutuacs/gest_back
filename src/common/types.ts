import { t } from "elysia";

export const id = t.Optional(t.Number());
export const createdAt = t.Optional(t.Date());
export const updatedAt = t.Optional(t.Date());
export const updatedById = t.Optional(t.Union([t.Number(), t.Null()]));

export const parameters = [{
    in: 'cookie',
    name: 'auth',
    required: true,
    schema: {
        description: "The user should be logged in",
        type: 'string' as const,
    }
}]