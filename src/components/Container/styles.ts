import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background: url("./background.svg") center right / 45vh no-repeat;

  .wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  @media (max-width: ${mediasQuery.mdl}) {
    background-color: ${theme.primaryColor};
  }
`;
