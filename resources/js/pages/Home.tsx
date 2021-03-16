import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { TodoList } from "../components/todos/TodoList";
import { Colors } from "../atoms/style-guide";
import { TodoContextWrapper } from "../context/todoContext/TodoContext";

export const Home = () => {
  return (
    <div style={{
      background: `linear-gradient(to bottom, ${Colors.BRAND01} 257px,${Colors.BRAND01} 257px,${Colors.BRAND01} 257px,${Colors.UI00} 257px,${Colors.UI00} 100%)`
    }}>
      <TodoContextWrapper>
        <Navbar />
        <TodoList />
      </TodoContextWrapper>
    </div>
  )
}