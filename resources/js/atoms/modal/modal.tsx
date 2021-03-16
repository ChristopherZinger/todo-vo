import styled from "styled-components"
import { Colors } from "../style-guide";

export const Modal = styled.div`
  left: 0px;
  top:0px;
  position: fixed;
  background-color: ${Colors.UI02};
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  z-index: 10000;

  .wrapper {
    background-color: ${Colors.UI00};
    position: fixed; 
    width: 100vw;
    bottom: 0px;
    padding: 0px;
    margin: 0px;
    z-index: 10001;

    .container{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 390px;
      min-height: 60vh;
    }
  }
`