export enum FIELD_TYPES {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    DATE = "date",
}

export function fieldTypeValidOptions({f, max, min, v}: {f: FIELD_TYPES, max: string, min: string, v: string}): boolean {
    if (!max && !min) {
        return true;
    }

    switch (f) {
        case FIELD_TYPES.STRING:
            if (max && v.length > parseInt(max)) {
                return false;
            }

            if (min && v.length < parseInt(min)) {
                return false;
            }

            return true
        case FIELD_TYPES.NUMBER:

            if (max && parseFloat(v) > parseFloat(max)) {
                return false;
            }

            if (min && parseFloat(v) < parseFloat(min)) {
                return false;
            }

            return true
        case FIELD_TYPES.DATE:

            if (max && new Date(v) > new Date(max)) {
                return false;
            }

            if (min && new Date(v) < new Date(min)) {
                return false;
            }

            return true
        default:
            return false;
    }
}