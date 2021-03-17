import React, { useContext } from "react";
import { TodoListContext } from "../../context/todoContext/TodoContext";
import dayjs from "dayjs"

export const TodoSummary = () => {
  const todoList = useContext(TodoListContext);

  const nrOfPendingTodos = todoList.reduce((acc, curr) => {
    return !curr.done ? acc + 1 : acc
  }, 0)

  const nrOfOverdueTodos = todoList.reduce((acc, curr) => {
    if (dayjs().isAfter(dayjs(curr.due_date), "day") && !curr.done) return acc + 1;
    return acc
  }, 0)

  return (
    <>
      <div>You have <Underline nr={nrOfPendingTodos} /> todo's,</div>
      <div><Underline nr={nrOfOverdueTodos} /> of them is overdue</div>
    </>
  )
}

const Underline = (props: { nr: number }) =>
  <span style={{ textDecoration: "underline", fontWeight: "bold" }}>{toText(props.nr)}</span>


const toText = (nr: number) => {
  if (nr > 6) return nr;
  if (nr === 5) return "five";
  if (nr === 4) return "four";
  if (nr === 3) return "three";
  if (nr === 2) return "tow";
  if (nr === 1) return "one";
  if (nr === 0) return "zero";
}