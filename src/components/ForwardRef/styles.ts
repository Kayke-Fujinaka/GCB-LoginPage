import styled from "styled-components";
import theme from "../../styles/theme";

export const ForwardRef = styled.p`
  font-size: 1.8rem;
  font-weight: ${theme.fonts.weight.normal};
  color: ${theme.primaryColor};
  @media (max-width: 900px) {
    color: ${theme.secondColor};
  }

  a {
    @media (max-width: 900px) {
      word-break: break-word;
      color: ${theme.secondColor};
    }
  }
`;
