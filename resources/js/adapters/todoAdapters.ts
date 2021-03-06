import axios from "axios";
import { todoDM } from "../datamapper/todo/todoDM";
import { ITodoList, ITodo, ICreateTodo } from "../types";

export const getTodoList = async (): Promise<ITodoList> => {
    const response = await axios.get<ITodoList>("/api/todos");
    return todoDM.convertAPIListResponse(response.data);
};

export const updateTodo = async (id: number, data: ITodo): Promise<ITodo> => {
    const response = await axios.put<ITodo>(`/api/todos/${id}`, data);
    return todoDM.convertAPIDetailResponse(response.data);
};

export const deleteTodo = async (id: number): Promise<number> => {
    const response = await axios.delete(`/api/todos/${id}`);
    return id;
};

export const createTodo = async (data: ICreateTodo): Promise<ITodo> => {
    const response = await axios.post(`/api/todos`, data);
    return todoDM.convertAPIDetailResponse(response.data);
};
