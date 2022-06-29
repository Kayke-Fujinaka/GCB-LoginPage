import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root {
        font-size: 62.5%; // 1rem = 10px
    }

    html, body {
        width: 100%;
        height: 100%;
        font-family: ${theme.fonts.primary};
        background: ${theme.background};
    }

    h1 {
        font-weight: ${theme.fonts.weight.bold};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`;
