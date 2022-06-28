import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  width: 20rem;
  height: 6rem;
  font-size: 2.5rem;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.button};
  background-color: ${theme.primaryColor};
  border: none;
  border-radius: 1rem;
`;
