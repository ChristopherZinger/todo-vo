import React from "react";
import { Bell } from "./Bell";
import { Avatar } from "../user/Avatar";
import { TodoSummary } from "../todos/TodoSummary"
import { Greetings } from "../user/Greetings";
import { NavStyled } from "../../atoms/nav/NavStyles";

export const Navbar = () => {
  return (
    <NavStyled>
      <div>
        <Greetings />
        <TodoSummary />
      </div>
      <Bell />
      <Avatar />
    </NavStyled>
  )
}