import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  color: ${theme.primaryColor};
  @media (max-width: 800px) {
    display: none;
  }
  p {
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weight.normal};
    line-height: 3.5rem;
    span {
      font-weight: ${theme.fonts.weight.semiBold};
    }
  }
`;
