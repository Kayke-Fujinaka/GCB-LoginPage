import styled from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  margin: 0 7.5rem;

  width: 20rem;
  height: 6rem;
  font-size: 2.5rem;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.button};
  border: none;
  border-radius: 1rem;
  background-color: ${theme.primaryColor};
`;
