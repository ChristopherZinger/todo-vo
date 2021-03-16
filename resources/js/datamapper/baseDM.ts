export class BaseDM {
    public isString(data: any) {
        return typeof data === "string";
    }

    public isDate(data: any) {
        return isNaN(Date.parse(data.created_at));
    }

    public isBoolean(data: any) {
        // is boolean
        if (typeof data === "boolean") {
            return true;
        }
        // is 0 or 1
        const b = parseInt(data);
        if (!isNaN(b)) {
            if (b === 0 || b === 1) {
                return true;
            }
        }
        return false;
    }

    public isNumber(data: any) {
        return !isNaN(data) && typeof data === "number";
    }
}
