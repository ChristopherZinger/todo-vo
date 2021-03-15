import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { TodoList } from "../components/todos/TodoList";

export const Home = () => {
  return (
    <>
      <Navbar />
      <TodoList />
    </>
  )
}