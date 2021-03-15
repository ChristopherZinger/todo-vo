import axios from "axios";
import { ITodo } from "../types.d";

export const getTodoList = async () => {
    return await axios.get("/api/todos");
};
