import React from "react";
import styled, { StyledComponent } from "styled-components"
import { Colors } from "../style-guide";

interface ITodoCardStyledProps {
  isOverdue?: boolean
}

type ITodoCardStyled = StyledComponent<"div", any, ITodoCardStyledProps, never>;

export const TodoCardStyled: ITodoCardStyled = styled.div<ITodoCardStyledProps>`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 166px;
  width: 335px;
  border: 2px solid ${props => props.isOverdue ? Colors.ERROR : Colors.UI01};
  border-radius: 3px;
  background-color:${Colors.UI00};
`;

export const TodoCardSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`


