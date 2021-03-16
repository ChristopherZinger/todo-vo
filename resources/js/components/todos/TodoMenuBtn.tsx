import React, { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { DropdownContent, Dropdown } from "../../atoms/dropdown/Dropdown";
import { useDeleteTodo } from "../../apiHooks/useDeleteTodo";
import { TodoListActions } from "../../context/todoContext/TodoContext";
import { ITodo } from "../../types";

type Props = {
  todo: ITodo,
  showModal: () => void
}

export const TodoMenuBtn = (props: Props) => {
  const [deleteTodo, { loading, data, error }] = useDeleteTodo();
  const todoActions = useContext(TodoListActions);

  return (
    <Dropdown>
      <span><FontAwesomeIcon icon={faEllipsisV} color="gray" style={{ marginLeft: "100%", transform: "translateX(-100%)" }} /></span>
      <DropdownContent>
        <p onClick={props.showModal}>Edit</p>
        <p onClick={async () => {
          const id = await deleteTodo(props.todo.id);
          if (id && todoActions) {
            todoActions?.deleteTodoById(props.todo.id);
          }
        }}>Remove</p>
      </DropdownContent>
    </Dropdown>
  )
}


