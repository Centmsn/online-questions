import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: gray;
    }

    button {
        border: none;
        outline:none;
        background: none;
    }
`;

export default GlobalStyle;
