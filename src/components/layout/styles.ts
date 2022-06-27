import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.background};
  background-image: url("./background.svg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: 67.5vh;
  @media (max-width: 900px) {
    background-color: ${theme.primaryColor};
  }
  .wrapper {
    display: flex;
    justify-content: left;
    width: 100%;
    margin-left: 5rem;
  }
`;
