import React, { useEffect, useContext, useState } from "react";
import { TodoCard } from "./TodoCard";
import { useGetTodoList } from "../../apiHooks/useGetTodoList";
import { TodoContainerStyled } from "../../atoms/todo/TodoContainer";
import { TodoListActions, TodoListContext } from "../../context/todoContext/TodoContext";
import { CircleBtn } from "../../atoms/circleBtn/CircleBtn";
import { Modal } from "../../atoms/modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

        {todoList &&
          todoList.map((todo) => <TodoCard key={todo.id} todo={todo} />)
        }
      </TodoContainerStyled>
      <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
        <CircleBtn onClick={() => setShowModal(true)} ></CircleBtn>
      </div>
      {showModal && (
        <Modal>
          <div className="wrapper">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Add new todo</h3>
                <FontAwesomeIcon icon={faTimes} onClick={() => setShowModal(false)} />
              </div>

              <form>
                <div>
                  <input type="test" name="title" />
                </div>

                <div>
                  <input type="date" name="date" />
                </div>

                <div>
                  <input type="test-area" name="content" />
                </div>

                <button onClick={() => setShowModal(false)}>save</button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}