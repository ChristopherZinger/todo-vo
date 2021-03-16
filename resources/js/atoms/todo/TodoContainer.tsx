import styled from "styled-components"
import { Colors } from "../style-guide"

export const TodoContainerStyled = styled.div`
  position: relative;
  display: block;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 369px;
  border-radius: 10px 10px 0 0;
  background-color: ${Colors.UI00};
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.1);
`