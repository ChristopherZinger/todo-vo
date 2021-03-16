import React from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/todoAPIHooks";
import { TodoContainerStyled } from "../../atoms/todo/TodoContainer";

export const TodoList = () => {
  const { loading, error, data } = useGetTodoList();

  return (
    <TodoContainerStyled>
      {loading && (
        <>loading</>
      )}

      {data &&
        data.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      }
    </TodoContainerStyled>
  )
}