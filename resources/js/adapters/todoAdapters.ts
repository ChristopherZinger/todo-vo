import axios from "axios";
import { todoDM } from "../datamapper/todo/todoDM";
import { ITodoList, ITodo } from "../types";

export const getTodoList = async (): Promise<ITodoList> => {
    const response = await axios.get<ITodoList>("/api/todos");
    return todoDM.convertAPIListResponse(response.data);
};

export const getTodo = async (id: number): Promise<ITodo> => {
    const response = await axios.get<ITodo>(`/api/todos/${id}`);
    return todoDM.convertAPIDetailResponse(response.data);
};

export const updateTodo = async (id: number, data: ITodo): Promise<ITodo> => {
    const response = await axios.put<ITodo>(`/api/todos/${id}`, data);
    return todoDM.convertAPIDetailResponse(response.data);
};

export const deleteTodo = async (id: number): Promise<number> => {
    const response = await axios.delete(`/api/todos/${id}`);
    return id;
};
