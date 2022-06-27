import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: left;
  height: 100%;
  gap: 5rem;
  color: ${theme.primaryColor};
  @media (max-width: 900px) {
    display: none;
  }
  h1 {
    font-size: 4rem;
    font-weight: ${theme.fonts.weight.bold};
    line-height: 6.5rem;
    @media (max-width: 1000px) {
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }
  p {
    font-size: 3rem;
    font-weight: ${theme.fonts.weight.normal};
    line-height: 4.5rem;
    @media (max-width: 1000px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;
