import react from "react"
import styled from "styled-components";
import { Colors } from "../style-guide";

export const DropdownContent = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  left: -100px;
  box-sizing: border-box;
  width: 154px;
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  background-color: ${Colors.UI00};
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.1);
  z-index: 1;

  p{
    margin: 0px;
    padding: 16px; 
    font-size: 12px;
  }

  p:hover {
    background-color: ${Colors.UI01}
  }

  p:last-child{
    color: ${Colors.ERROR};
    border-top: 1px solid ${Colors.UI02};
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent}{
    display: block;
  }
`
