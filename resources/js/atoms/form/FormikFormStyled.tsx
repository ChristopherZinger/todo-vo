import styled from "styled-components";
import { Form } from "formik";
import { Colors } from "../style-guide";

export const FormikFormStyled = styled(Form)`
  position:relative;
  display:block;
  width: 100%;

  *{
    margin: auto;
    box-sizing: border-box;
  }

  .date-input-wrapper {
    height: 54px;
    width: 100%;
    background-color: ${Colors.UI02};
    padding-left: 20px ;
    padding-right: 20px ;
    display: flex;
    justify-content: "space-between";

    div{
       margin-left: 0px;
        color: ${Colors.UI03};
    }
  }

  input[type=date]{
    height: 41px;
    width: 159px;
    border-radius: 5px;
    box-shadow: 0 1px 0 0 rgba(216,216,216,0.5);
    background-color: ${Colors.UI00};
    color: ${Colors.UI03};
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
        color: ${Colors.UI03};
    }
  
  input{
    height: 54px;
    width: 100%;
    border: none;
    outline: none;
    background-color: ${Colors.UI02};
    margin: 8px 0px;
    padding-left: 20px ;
    padding-right: 20px ;
  }

  textarea{
    height: 257px;
    width: 100%;
    border: none;
    outline: none;
    background-color: ${Colors.BRAND03};
    color: ${Colors.BRAND02};
    margin: 8px 0px;
    padding: auto 20px;
    resize: none;
    overflow: auto;
    padding: 20px;
  }

  button{
    height: 54px;
    width: 100%;
    color: white;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    background-color: ${Colors.BRAND01}
  }

  button:disabled,
  button[disabled]{
    background-color: ${Colors.UI02}
  }
`