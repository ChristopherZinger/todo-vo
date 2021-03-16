export type ITodo = {
    content: string;
    created_at: Date;
    done: boolean;
    due_date: Date;
    id: number;
    title: string;
    updated_at: Date;
};

export type ITodoList = ITodo[];
