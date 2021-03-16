export type ITodo = {
    content: string;
    created_at: Date;
    done: boolean;
    due_date: Date;
    id: number;
    title: string;
    updated_at: Date;
};

export type ICreateTodo = {
    content: string;
    done: boolean;
    due_date: Date;
    title: string;
};

export type ITodoList = ITodo[];
