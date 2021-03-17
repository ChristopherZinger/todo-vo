import React, { useEffect, useContext, useState } from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/useGetTodoList";
import { TodoContainerStyled } from "../../atoms/todo/TodoContainer";
import { TodoListActions, TodoListContext } from "../../context/todoContext/TodoContext";
import { CircleBtn } from "../../atoms/circleBtn/CircleBtn";
import { CreateTodoModal } from "./CreateTodoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../atoms/style-guide";
import { toast } from "react-toastify";

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
          <div style={{ left: "50%", top: "50%", position: "absolute" }}>
            <FontAwesomeIcon icon={faSpinner} className="spinner" color={Colors.UI03} />
          </div>
        )}

        {todoList && (todoList.map((todo) => <TodoCard key={todo.id} todo={todo} />))}
      </TodoContainerStyled>
      <AddBtn click={() => setShowModal(true)} />

      {showModal && (
        <CreateTodoModal close={() => setShowModal(false)} />
      )}

      {error && (
        toast.error("Sorry, can't get data from the server.")
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