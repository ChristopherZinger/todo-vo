import React, { useEffect, useContext, useState } from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/useGetTodoList";
import { TodoContainerStyled } from "../../atoms/todo/TodoContainer";
import { TodoListActions, TodoListContext } from "../../context/todoContext/TodoContext";
import { CircleBtn } from "../../atoms/circleBtn/CircleBtn";
import { CreateTodoModal } from "./CreateTodoModal";


export const TodoList = () => {
  const { loading, error, data } = useGetTodoList();
  const todoList = useContext(TodoListContext);
  const todoActions = useContext(TodoListActions)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    todoActions?.setFullList(data)
  }, [data])

  return (
    <>
      <TodoContainerStyled>
        {loading && (
          <>loading</>
        )}

        {todoList && (todoList.map((todo) => <TodoCard key={todo.id} todo={todo} />))}
      </TodoContainerStyled>
      <AddBtn click={() => setShowModal(true)} />
      {showModal && (
        <CreateTodoModal close={() => setShowModal(false)} />
      )}
    </>
  )
}

const AddBtn = (props: { click: () => void }) => <div onClick={props.click} style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
  <CircleBtn >
    <span></span>
    <span></span>
  </CircleBtn>
</div>