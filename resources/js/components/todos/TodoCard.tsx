import React from "react";
import { TodoCardStyled, TodoCardSectionStyled } from "../../atoms/todo/TodoCard"
import { TodoStatusIcon } from "./TodoStatusIcon";
import { ITodo } from "../../types.d";
import dayjs from "dayjs";

interface Props {
  todo: ITodo;
}

export const TodoCard = (props: Props) => {
  const due_date = dayjs(props.todo.due_date).format("DD MM YYYY")

  return (
    <TodoCardStyled isOverdue={false}>
      <TodoCardSectionStyled>
        <TodoStatusIcon done={props.todo.done} />
        {props.todo.title}
        <TodoMenu />
      </TodoCardSectionStyled>
      <TodoCardSectionStyled>
        <div></div>
        <div>{props.todo.content}</div>
        <div></div>
      </TodoCardSectionStyled>
      <TodoCardSectionStyled>
        <div></div>
        <div> {due_date}</div>
        <div></div>
      </TodoCardSectionStyled>
    </TodoCardStyled>
  )
}

const TodoMenu = () => <div>menu</div>