import React, { useEffect, useState } from "react";
import { getTodoList } from "../adapters/todoAdapters";
import { ITodoList } from "../types";

export const useGetTodoList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ITodoList>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTodoList();
        setLoading(false);
        setData(data);
        return data;
      } catch (err) {
        setLoading(false)
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};