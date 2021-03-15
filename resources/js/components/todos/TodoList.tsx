import React from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/todoAPIHooks";

export const TodoList = () => {
  const { loading, error, data } = useGetTodoList();
  console.log(loading, error, data)
  return (
    <div>
      Todos
      {loading && (
        <>loading</>
      )}

      {data.data &&
        data.data.map((el: any) => <TodoCard key={el.id} />)
      }

    </div>
  )
}