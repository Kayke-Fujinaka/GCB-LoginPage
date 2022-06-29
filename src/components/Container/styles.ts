import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background: url("./background.svg") center right / 45vh no-repeat;
  z-index: 1;
  @media (max-width: 900px) {
    background-color: ${theme.primaryColor};
  }
  .wrapper {
    display: flex;
    padding-left: 4.5rem;
  }
`;
