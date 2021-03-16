import { ITodo, ITodoList } from "../../types.d";
import { BaseDM } from "../baseDM";

class TodoDM extends BaseDM {
    public convertAPIListResponse(data: any): ITodoList {
        if (!Array.isArray(data)) {
            throw new Error(
                `Can't convert request to TodoList, request is not a array`
            );
        }
        return data.map((todo) => this.convertAPIDetailResponse(todo));
    }

    public convertAPIDetailResponse(data: any): ITodo {
        if (!this.isString(data.content)) {
            throw new Error(
                `Can't convert request to Todo object, wrong data.content`
            );
        }

        if (!this.isDate(data.created_at)) {
            throw new Error(
                `Can't convert request to Todo object, wrong data.created_at : "${data.created_at}"`
            );
        }

        if (!this.isBoolean(data.done)) {
            // should check if data is nullish?
            throw new Error(
                "Can't convert request to Todo object, wrong data.done"
            );
        }

        if (!this.isDate(data.due_date)) {
            throw new Error(
                "Can't convert request to Todo object, wrong data.due_date"
            );
        }

        if (!this.isNumber(data.id)) {
            throw new Error(
                "Can't convert request to Todo object, wrong data.id"
            );
        }

        if (!this.isString(data.title)) {
            throw new Error(
                "Can't convert request to Todo object, wrong data.title"
            );
        }

        if (!this.isDate(data.updated_at)) {
            throw new Error(
                "Can't convert request to Todo object, wrong data.updated_at"
            );
        }

        return {
            content: data.content,
            created_at: new Date(data.created_at),
            done:
                typeof data.done === "boolean"
                    ? data.done
                    : Boolean(parseInt(data.done)),
            due_date: new Date(data.due_date),
            id: data.id,
            title: data.title,
            updated_at: new Date(data.updated_at),
        };
    }
}

export const todoDM = new TodoDM();
