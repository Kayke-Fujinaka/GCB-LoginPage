import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background: url("./background.svg") center right / 45vh no-repeat;
  z-index: 1;
  background: ${theme.background};
  @media (max-width: 900px) {
    background-color: ${theme.primaryColor};
  }
  .wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;
