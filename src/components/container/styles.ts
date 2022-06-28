import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: url("./background.svg") ${theme.background} right no-repeat;
  background-size: 67.5vh;
  @media (max-width: 900px) {
    background-color: ${theme.primaryColor};
  }
  .wrapper {
    display: flex;
    justify-content: left;
    width: 100%;
    margin-left: 4.5rem;
  }
`;
