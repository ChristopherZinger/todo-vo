import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  

  body {
    min-width: fit-content;
    font-family: 'Nunito', sans-serif;
    /* font-family: 'Raleway', sans-serif;  */
  }

  h4{
    margin: 0px;
    font-weight: bold;
  }

    // https://stackoverflow.com/questions/6410730/css-endless-rotation-animation
    @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
    .spinner {
      -webkit-animation: rotating 2s linear infinite;
      -moz-animation: rotating 2s linear infinite;
      -ms-animation: rotating 2s linear infinite;
      -o-animation: rotating 2s linear infinite;
      animation: rotating 2s linear infinite;
    }

    @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`