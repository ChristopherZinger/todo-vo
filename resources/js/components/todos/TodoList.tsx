import React, { useEffect, useContext } from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/useGetTodoList";
import { TodoContainerStyled } from "../../atoms/todo/TodoContainer";
import { TodoListActions, TodoListContext } from "../../context/todoContext/TodoContext";

export const TodoList = () => {
  const { loading, error, data } = useGetTodoList();
  const todoList = useContext(TodoListContext);
  const todoActions = useContext(TodoListActions)

  useEffect(() => {
    todoActions?.setFullList(data)
  }, [data])

  return (
    <TodoContainerStyled>
      {loading && (
        <>loading</>
      )}

      {todoList &&
        todoList.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      }
    </TodoContainerStyled>
  )
}