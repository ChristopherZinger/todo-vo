import React, { createContext, useState } from "react"
import { ITodoList, ITodo } from "../../types";

interface IActions {
  setFullList: (list: ITodoList) => void,
  deleteTodoById: (id: number) => void,
  updateTodo: (newTodo: ITodo) => void,
  createTodo: (newTodo: ITodo) => void
}

const initialValue: ITodoList = [];
export const TodoListContext = createContext(initialValue)
export const TodoListActions = createContext<IActions | undefined>(undefined)

type Props = {
  children: React.ReactNode
}

export const TodoContextWrapper = (props: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState(initialValue)

  const actions: IActions = {
    setFullList: (list: ITodoList) => { setTodoList(list) },
    deleteTodoById: (id: number) => { setTodoList(todoList.filter(todo => todo.id !== id)) },
    updateTodo: (newTodo: ITodo) => { setTodoList(todoList.map(oldTodo => oldTodo.id === newTodo.id ? newTodo : oldTodo)) },
    createTodo: (newTodo: ITodo) => { setTodoList([...todoList, newTodo]) }
  };

  return (
    <TodoListContext.Provider value={todoList}>
      <TodoListActions.Provider value={actions} >
        {props.children}
      </TodoListActions.Provider>
    </TodoListContext.Provider>
  )
}