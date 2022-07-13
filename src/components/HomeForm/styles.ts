import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

export const Heading = styled.h1`
  text-align: center;
  font-size: 2.65rem;
  color: ${theme.primaryColor};
  
  @media (max-width: ${mediasQuery.mdl}) {
    margin-top: 4rem;
    color: ${theme.secondColor};
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-block: 2rem 4rem;

  p {
    font-size: 1.8rem;
    color: ${theme.primaryColor};
  }

  span {
    font-weight: ${theme.fonts.weight.semiBold};
  }

  @media (max-width: ${mediasQuery.mdl}) {
    text-align: center;

    p {
      color: ${theme.secondColor};
    }
    
    span {
      color: ${theme.button};
    }
  }
`;
