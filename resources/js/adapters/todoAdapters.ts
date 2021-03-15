import axios from "axios";

export const getTodoList = async () => {
    return await axios.get("/api/todos");
};
