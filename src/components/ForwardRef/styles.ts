import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

export const ForwardRef = styled.p`
  font-size: 1.8rem;
  font-weight: ${theme.fonts.weight.normal};
  color: ${theme.primaryColor};

  @media (max-width: ${mediasQuery.mdl}) {
    color: ${theme.secondColor};
    a {
      word-break: break-word;
      color: ${theme.secondColor};
    }
  }

  @media (max-width: ${mediasQuery.mdl}) {
    font-size: 1.6rem;
  }
`;
