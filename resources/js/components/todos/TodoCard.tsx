import React from "react";
import { TodoCardStyled, TodoCardSectionStyled } from "../../atoms/todo/TodoCard"
import { TodoStatusIcon } from "./TodoStatusIcon";
import { ITodo } from "../../types.d";
import dayjs from "dayjs";

interface Props {
  todo: ITodo;
}

export const TodoCard = (props: Props) => {
  const due_date = dayjs(props.todo.due_date).format("DD MMMM YYYY")

  return (
    <TodoCardStyled isOverdue={false}>
      <TodoCardSectionStyled>
        <TodoStatusIcon todo={props.todo} />
        {props.todo.title}
        <TodoMenu />
      </TodoCardSectionStyled>
      <TodoCardSectionStyled>
        <div></div>
        <TodoContent content={props.todo.content} />
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
const TodoContent = (props: { content: string }) => <div>{props.content.length < 80 ? props.content : `${props.content.substring(0, 80)} ...`}</div>