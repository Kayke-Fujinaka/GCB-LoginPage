import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.fonts.primary};      
        text-decoration: none;
    }

    :root {
        font-size: 62.5%;
    }

    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: ${theme.background};
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
