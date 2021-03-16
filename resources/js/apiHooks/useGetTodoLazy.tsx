import React, { useEffect, useState } from "react";
import { getTodo } from "../adapters/todoAdapters";
import { ITodo } from "../types";

type ReturnType = [
  (id: number) => Promise<void>,
  {
    loading: boolean,
    error: any,
    data: ITodo | undefined
  }
]

export const useGetTodoLazy = (): ReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ITodo>();

  const fetchData = async (id: number) => {
    try {
      setLoading(true);
      const data = await getTodo(id);
      setLoading(false);
      setData(data);
    } catch (err) {
      setLoading(false)
      setError(err);
    }
  };

  return [fetchData, { loading, error, data }]
};