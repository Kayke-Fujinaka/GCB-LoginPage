import styled from "styled-components";
import theme from "../../styles/theme";

export const Heading = styled.h1`
  text-align: center;
  font-size: 2.65rem;
  color: ${theme.primaryColor};
  @media (max-width: 900px) {
    margin-top: 4rem;
    color: ${theme.secondColor};
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-block: 2rem 4rem;

  @media (max-width: 900px) {
    text-align: center;
  }

  p {
    font-size: 2.5rem;
    color: ${theme.primaryColor};
    @media (max-width: 900px) {
      color: ${theme.secondColor};
    }
  }

  span {
    font-weight: ${theme.fonts.weight.semiBold};
    @media (max-width: 900px) {
      color: ${theme.button};
    }
  }
`;
