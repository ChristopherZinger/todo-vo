import React, { useContext } from "react";
import { Modal } from "../../atoms/modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createTodo } from "../../adapters/todoAdapters";
import { Formik, Form, Field } from "formik";
import dayjs from "dayjs";
import { TodoListActions } from "../../context/todoContext/TodoContext";
import { useUpdateTodo } from "../../apiHooks/useUpdateTodo";
import { ITodo } from "../../types.d";
import { FormikFormStyled } from "../../atoms/form/FormikFormStyled";

type PropsCreate = {
  close: () => void;
}

export const CreateTodoModal = (props: PropsCreate) => {
  const todoActions = useContext(TodoListActions);
  const initialValues = {
    title: "",
    content: "",
    due_date: dayjs().format("YYYY-MM-DD").toString()
  }

  return (
    <Modal>
      <div className="wrapper">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Add new todo</h3>
            <FontAwesomeIcon icon={faTimes} onClick={() => props.close()} />
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              const data = await createTodo({
                title: values.title,
                content: values.content,
                done: false,
                due_date: new Date(values.due_date)
              })
              if (data && todoActions) {
                todoActions.createTodo(data)
              }
              props.close()
            }}
          >
            {() =>
              <FormikFormStyled>
                <div>
                  <Field type="text" name="title" placeholder="What are you going to do?" required />
                </div>

                <div className="date-input-wrapper">
                  <div>Date</div>
                  <Field type="date" name="due_date" required />
                </div>

                <div>
                  <Field type="text" as="textarea" name="content" required />
                </div>
                <button type="submit">save</button>
              </FormikFormStyled>
            }
          </Formik>
        </div>
      </div>
    </Modal>
  )
}

type PropsUpdate = {
  close: () => void;
  todo: ITodo
}

export const UpdateTodoModal = (props: PropsUpdate) => {
  const todoActions = useContext(TodoListActions);
  const [updateTodo, { loading, error, data }] = useUpdateTodo();
  const initialValues = {
    title: props.todo?.title || "",
    content: props.todo?.content || "",
    due_date: props.todo ? dayjs(props.todo.due_date).format("YYYY-MM-DD").toString() : dayjs().format("YYYY-MM-DD").toString()
  }

  return (
    <Modal>
      <div className="wrapper">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Add new todo</h3>
            <FontAwesomeIcon icon={faTimes} onClick={() => props.close()} />
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              const data = await updateTodo(props.todo.id, {
                ...props.todo,
                title: values.title,
                content: values.content,
                done: false,
                due_date: new Date(values.due_date)
              })
              if (data && todoActions) {
                todoActions.updateTodo(data)
              }
              props.close()
            }}
          >
            {() =>
              <FormikFormStyled>
                <div>
                  <Field type="text" name="title" required />
                </div>

                <div className="date-input-wrapper">
                  <div>Date</div>
                  <Field type="date" name="due_date" required />
                </div>

                <div>
                  <Field type="text" name="content" as="textarea" required />
                </div>

                <button type="submit">save</button>
              </FormikFormStyled>
            }
          </Formik>
        </div>
      </div>
    </Modal>
  )
}