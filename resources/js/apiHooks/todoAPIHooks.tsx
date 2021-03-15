import React, { useEffect, useState } from "react";
import { getTodoList } from "../adapters/todoAdapters";

export const useGetTodoList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTodoList();
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false)
        setError(true);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};