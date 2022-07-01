import styled from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  margin-block: 1rem;
  width: 20rem;
  height: 6rem;
  font-size: 2.2rem;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.button};
  border: none;
  border-radius: 1rem;
  background-color: ${theme.primaryColor};
  transition: 0.5s;
  
  :hover {
    background-color: #2e2923;
  }

  @media (max-width: 900px) {
    color: ${theme.primaryColor};
    background: ${theme.secondColor};
    margin: 0 auto;
  }
`;
