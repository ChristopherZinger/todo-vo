import React from "react";
import styled, { StyledComponent } from "styled-components"
import { Colors } from "../style-guide";

interface ITodoCardStyledProps {
  isOverdue?: boolean
}

type ITodoCardStyled = StyledComponent<"div", any, ITodoCardStyledProps, never>;

export const TodoCardStyled: ITodoCardStyled = styled.div<ITodoCardStyledProps>`
  box-sizing: border-box;
  height: 166px;
  width: 335px;
  border: 2px solid ${props => props.isOverdue ? Colors.ERROR : Colors.UI01};
  border-radius: 3px;
  background-color:${Colors.UI00};
`;

export const TodoCardHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`


