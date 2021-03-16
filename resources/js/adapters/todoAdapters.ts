import axios from "axios";
import { todoDM } from "../datamapper/todo/todoDM";
import { ITodoList } from "../types";

export const getTodoList = async (): Promise<ITodoList> => {
    const data = await axios.get<ITodoList>("/api/todos");
    return todoDM.convertAPIListResponse(data.data);
};
