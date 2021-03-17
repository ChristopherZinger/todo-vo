import React, { useContext } from "react";
import { Modal } from "../../atoms/modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import dayjs from "dayjs";
import { TodoListActions } from "../../context/todoContext/TodoContext";
import { useUpdateTodo } from "../../apiHooks/useUpdateTodo";
import { ITodo } from "../../types.d";
import { FormikFormStyled } from "../../atoms/form/FormikFormStyled";
import { Colors } from "../../atoms/style-guide";
import { useCreateTodo } from "../../apiHooks/useCreateTodo";
import { toast } from "react-toastify";

type PropsCreate = {
  close: () => void;
}

export const CreateTodoModal = (props: PropsCreate) => {
  const todoActions = useContext(TodoListActions);
  const [createTodo, { loading, error, data }] = useCreateTodo();
  const initialValues = {
    title: "",
    content: "",
    due_date: dayjs().format("YYYY-MM-DD").toString()
  }

  return (
    <Modal>
      <div className="wrapper">
        <div className="container">
          <ModalTitle title="Add new todo" close={() => props.close()} />
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              if (!loading) {
                try {
                  const data = await createTodo({
                    title: values.title,
                    content: values.content,
                    done: false,
                    due_date: new Date(values.due_date)
                  })
                  if (data && todoActions) {
                    todoActions.createTodo(data)
                  }
                } catch (err) {
                  console.error(err)
                }
                if (error) { toast.error("Ups, something went wrong") }
                props.close()
              }
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
                <SaveBtn loading={loading} />
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
          <ModalTitle title="Edit todo" close={() => props.close()} />
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              if (!loading) {
                try {
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
                } catch (err) {
                  console.error(err)
                }
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

                <SaveBtn loading={loading} text="Update" />
              </FormikFormStyled>
            }
          </Formik>
        </div>
      </div>
      {error && (
        toast.error("Ups, something went wrong")
      )}
    </Modal>
  )
}

const SaveBtn = (props: { loading: boolean, text?: string }) => {
  const text = props.text || "save";
  return (
    <button type="submit" disabled={props.loading}>
      {!props.loading ? "Save" : <FontAwesomeIcon icon={faSpinner} color="gray" className="spinner" />}
    </button>
  )
}

const ModalTitle = (props: { title: string, close: () => void }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3>{props.title}</h3>
      <FontAwesomeIcon icon={faTimes} onClick={() => props.close()} color={Colors.UI02} />
    </div>
  )
}