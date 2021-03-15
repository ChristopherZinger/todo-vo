import React from "react";
import { Bell } from "./Bell";
import { Avatar } from "../user/Avatar";
import { TodoSummary } from "../todos/TodoSummary"
import { Greetings } from "../user/Greetings";

export const Navbar = () => {
  return (
    <nav>
      <Greetings />
      <TodoSummary />
      <Bell />
      <Avatar />
    </nav>
  )
}