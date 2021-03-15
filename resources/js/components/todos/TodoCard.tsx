import React from "react";

export const TodoCard = () => {
  return (
    <div>
      <div>
        <TodoStatusIcon />
        Todo Title
        <TodoMenu />
      </div>
      <div>
        todo content
      </div>
      <div>
        due to
      </div>
    </div>
  )
}

const TodoStatusIcon = () => <div>status</div>

const TodoMenu = () => <div>menu</div>