import styled from "styled-components"
import { Colors } from "../style-guide";

export const CircleBtn = styled.div`
  cursor: pointer;
  position: relative;
  background-color: ${Colors.BRAND01};
  border-radius: 50%;
  height: 65px;
  width: 65px;
  left: 50%;
  /* bottom: 50px; */
  transform: translateX(-50%);
`