export class BaseDM {
    public isString(data: any) {
        return typeof data === "string";
    }

    public isDate(data: any) {
        return isNaN(Date.parse(data.created_at));
    }

    public isBoolean(data: any) {
        return !!data;
    }

    public isNumber(data: any) {
        return !isNaN(data) && typeof data === "number";
    }
}
