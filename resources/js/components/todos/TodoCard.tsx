import React from "react";
import { TodoCardStyled, TodoCardHeaderStyled } from "../../atoms/todo/TodoCard"

export const TodoCard = () => {
  return (
    <TodoCardStyled isOverdue={false}>
      <TodoCardHeaderStyled>
        <TodoStatusIcon />
        Todo Title
        <TodoMenu />
      </TodoCardHeaderStyled>
      <div>
        todo content
      </div>
      <div>
        due to
      </div>
    </TodoCardStyled>
  )
}

const TodoStatusIcon = () => <div>status</div>

const TodoMenu = () => <div>menu</div>