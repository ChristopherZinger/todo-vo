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
  transform: translateX(-50%);

  span{
    width:20px;
    height: 2px;
    background-color: white;
    transform-origin: 50% 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
  }

  span:last-child{
    transform: translate(-50%, -50%);
  }

  span:first-child{
    transform:translate(-50%, -50%) rotate(90deg) ;
  }
`