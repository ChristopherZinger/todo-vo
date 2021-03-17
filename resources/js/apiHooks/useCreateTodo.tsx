import React, { useState } from "react";
import { createTodo } from "../adapters/todoAdapters";
import { ICreateTodo, ITodo } from "../types";

type ReturnType = [
  (todo: ICreateTodo) => Promise<ITodo | undefined>,
  {
    loading: boolean,
    error: any,
    data: ITodo | undefined
  }
]

export const useCreateTodo = (): ReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ITodo>();

  const fetchData = async (todo: ICreateTodo) => {
    try {
      setLoading(true);
      const data = await createTodo(todo);
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