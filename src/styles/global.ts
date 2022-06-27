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
        font-size: 62.5%; // 1rem = 10px
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
