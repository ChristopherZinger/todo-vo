import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle, faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useUpdateTodo } from "../../apiHooks/useUpdateTodo";
import { ITodo } from "../../types";
import { TodoListActions } from "../../context/todoContext/TodoContext";
import { Colors } from "../../atoms/style-guide";
import { toast } from "react-toastify";

export const TodoStatusIcon = (props: { todo: ITodo, isOverdue: boolean }) => {
  const [updateTodo, { loading, data, error }] = useUpdateTodo();
  const todoActions = useContext(TodoListActions);

  return (
    <>
      {loading && (
        <div>
          <FontAwesomeIcon icon={faSpinner} color="gray" className="spinner" />
        </div>
      )}

      {!loading && (
        <div style={{ cursor: "pointer" }} onClick={async () => {
          if (!loading) {
            try {
              const newTodo = await updateTodo(props.todo.id, { ...props.todo, done: !props.todo.done });
              if (newTodo && todoActions) {
                todoActions.updateTodo(newTodo)
              }
            } catch (err) {
              console.error(err)
            }
          }
        }
        }>
          {props.todo.done && <FontAwesomeIcon icon={faCheckCircle} color="gray" />}
          {!props.todo.done && props.isOverdue && <FontAwesomeIcon icon={faExclamationCircle} color={Colors.ERROR} />}
          {!props.todo.done && !props.isOverdue && <FontAwesomeIcon icon={faCircle} color={Colors.UI03} />}
        </div>
      )
      }

      {error && (
        toast.error("Ups, something went wrong")
      )}
    </>
  )
}