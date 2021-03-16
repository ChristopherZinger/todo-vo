import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useUpdateTodo } from "../../apiHooks/useUpdateTodo";
import { ITodo } from "../../types";
import { TodoListActions } from "../../context/todoContext/TodoContext";

export const TodoStatusIcon = (props: { todo: ITodo }) => {
  const [updateTodo, { loading, data, error }] = useUpdateTodo();
  const todoActions = useContext(TodoListActions);
  return (
    <>
      {loading && (
        <div>
          <FontAwesomeIcon icon={faSpinner} color="gray" />
        </div>
      )}
      {!loading && (
        <div style={{ cursor: "pointer" }} onClick={async () => {
          if (!loading) {
            const newTodo = await updateTodo(props.todo.id, { ...props.todo, done: !props.todo.done });
            if (newTodo && todoActions) {
              todoActions.updateTodo(newTodo)
            }
          }
        }}>
          {props.todo.done ? <FontAwesomeIcon icon={faCheckCircle} color="gray" /> : <FontAwesomeIcon icon={faCircle} color="gray" />}
        </div>
      )}
    </>
  )
}