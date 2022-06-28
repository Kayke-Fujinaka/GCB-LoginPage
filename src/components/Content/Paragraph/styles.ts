import styled from "styled-components";
import theme from "../../../styles/theme";

export const Paragraph = styled.p`
  font-size: 2.5rem;
  font-weight: ${theme.fonts.weight.normal};
  line-height: 3.5rem;
  span {
    font-weight: ${theme.fonts.weight.semiBold};
  }
`;
