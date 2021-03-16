import React, { useState } from "react";
import { TodoCardStyled, TodoCardSectionStyled, CardCalendarStyled } from "../../atoms/todo/TodoCard"
import { TodoStatusIcon } from "./TodoStatusIcon";
import { ITodo } from "../../types.d";
import { TodoMenuBtn } from "./TodoMenuBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { UpdateTodoModal } from "./CreateTodoModal";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import { Colors } from "../../atoms/style-guide";
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isTomorrow);

interface Props {
  todo: ITodo;
}

export const TodoCard = (props: Props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const isOverdue = dayjs().isAfter(dayjs(props.todo.due_date), "day") && !props.todo.done

  return (
    <>
      <TodoCardStyled isOverdue={isOverdue}>
        <TodoCardSectionStyled>
          <TodoStatusIcon todo={props.todo} isOverdue={isOverdue} />
          <h4 style={{ color: isOverdue ? Colors.ERROR : Colors.UI03 }}>{props.todo.title}</h4>
          <TodoMenuBtn todo={props.todo} showModal={() => setShowEditModal(true)} />
        </TodoCardSectionStyled>

        <TodoCardSectionStyled>
          <div></div>
          <TodoContent content={props.todo.content} />
          <div></div>
        </TodoCardSectionStyled>

        <TodoCardSectionStyled>
          <div></div>
          <CardCalendar due_date={props.todo.due_date} />
          <div></div>
        </TodoCardSectionStyled>
      </TodoCardStyled>
      {showEditModal && (
        <UpdateTodoModal close={() => setShowEditModal(false)} todo={props.todo} />
      )}
    </>
  )
}

const TodoContent = (props: { content: string }) => <div>{props.content.length < 80 ? props.content : `${props.content.substring(0, 80)} ...`}</div>

const CardCalendar = (props: { due_date: Date }) => {
  let due_date = dayjs(props.due_date).format("DD MMMM YYYY")
  if (dayjs(props.due_date).isToday()) {
    due_date = "Today"
  }
  if (dayjs(props.due_date).isTomorrow()) {
    due_date = "Tomorrow"
  }
  if (dayjs(props.due_date).isYesterday()) {
    due_date = "Yesterday"
  }
  return (
    <CardCalendarStyled><FontAwesomeIcon icon={faCalendar} color="gray" /> {due_date}</CardCalendarStyled>
  )
}