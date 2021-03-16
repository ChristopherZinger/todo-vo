import React, { useState } from "react";
import { updateTodo } from "../adapters/todoAdapters";
import { ITodo } from "../types";

type ReturnType = [
  (id: number, newTodo: ITodo) => Promise<ITodo | undefined>,
  {
    loading: boolean,
    error: any,
    data: ITodo | undefined
  }
]

export const useUpdateTodo = (): ReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ITodo>();

  const fetchData = async (id: number, newTodo: ITodo) => {
    try {
      setLoading(true);
      const data = await updateTodo(id, newTodo);
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