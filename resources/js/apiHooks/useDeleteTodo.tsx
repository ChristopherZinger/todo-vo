import React, { useState } from "react";
import { deleteTodo } from "../adapters/todoAdapters";

type ReturnType = [
  (id: number) => Promise<number | undefined>,
  {
    loading: boolean,
    error: any,
    data: number | undefined
  }
]

export const useDeleteTodo = (): ReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<number>();

  const fetchData = async (id: number) => {
    try {
      setLoading(true);
      const data = await deleteTodo(id);
      setLoading(false);
      setData(data);
      return data;
    } catch (err) {
      setLoading(false)
      setError(err);
      return undefined;
    }
  };

  return [fetchData, { loading, error, data }]
};