import React from "react";
import { TodoCardStyled, TodoCardSectionStyled } from "../../atoms/todo/TodoCard"
import { TodoStatusIcon } from "./TodoStatusIcon";
import { ITodo } from "../../types.d";
import dayjs from "dayjs";
import { TodoMenuBtn } from "./TodoMenuBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

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
        <TodoMenuBtn todo={props.todo} />
      </TodoCardSectionStyled>

      <TodoCardSectionStyled>
        <div></div>
        <TodoContent content={props.todo.content} />
        <div></div>
      </TodoCardSectionStyled>

      <TodoCardSectionStyled>
        <div></div>
        <div style={{ color: "gray" }}><FontAwesomeIcon icon={faCalendar} color="gray" /> {due_date}</div>
        <div></div>
      </TodoCardSectionStyled>
    </TodoCardStyled>
  )
}

const TodoContent = (props: { content: string }) => <div>{props.content.length < 80 ? props.content : `${props.content.substring(0, 80)} ...`}</div>