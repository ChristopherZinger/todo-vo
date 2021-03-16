import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { DropdownContent, Dropdown } from "../../atoms/dropdown/Dropdown";
import { useDeleteTodo } from "../../apiHooks/useDeleteTodo";
import { TodoListActions } from "../../context/todoContext/TodoContext";
import { ITodo } from "../../types";

export const TodoMenuBtn = (props: { todo: ITodo }) => {
  const [deleteTodo, { loading, data, error }] = useDeleteTodo();
  const todoActions = useContext(TodoListActions);

  return (
    <Dropdown>
      <span><FontAwesomeIcon icon={faEllipsisV} color="gray" style={{ marginLeft: "100%", transform: "translateX(-100%)" }} /></span>
      <DropdownContent>
        <p>Edit</p>
        <p onClick={async () => {
          const id = await deleteTodo(props.todo.id);
          if (id && todoActions) {
            todoActions?.deleteTodoById(props.todo.id);
          }
        }}>Remove</p>
      </DropdownContent>
    </Dropdown>)
}


