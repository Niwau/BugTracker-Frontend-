import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    html {
      font-size: 10px;
    }
    :root {
      --blue-900: #1456D5;
      --blue-300: #CADBFA;
      --dark-900: #202020;
      --dark-800: #7C7C7C;
      --dark-700: #ADADAD;
      --dark-600: #D9D9D9;
      --bg-color: #F6F6F6;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;
