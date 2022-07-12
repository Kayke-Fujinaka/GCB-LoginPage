import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  color: ${theme.primaryColor};

  p {
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weight.normal};
    line-height: 3.5rem;
    span {
      font-weight: ${theme.fonts.weight.semiBold};
    }
  }
  
  @media (max-width: 900px) {
    display: none;
  }
`;
