import styled from "styled-components"
import { Colors } from "../style-guide";

export const Modal = styled.div`
  margin: 0px;
  display: block;
  position: fixed !important;
  left: 0px !important;
  top: 0px !important;
  background-color: ${Colors.UI02};
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  z-index: 10000;

  .wrapper {
    box-sizing: border-box;
    background-color: ${Colors.UI00};
    left: 0px;
    position: fixed; 
    width: 100%;
    bottom: 0px;
    padding: 0px 8px;
    margin: 0px;
    z-index: 10001;

    .container{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 390px;
      min-height: 60vh;
      max-width: 95%;
    }
  }
`
