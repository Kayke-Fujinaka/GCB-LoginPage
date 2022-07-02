import styled from "styled-components";
import theme from "../../styles/theme";

export interface ButtonProps {
  bgColor?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  margin-block: 1rem;
  width: 20rem;
  height: 6rem;
  font-size: 2.2rem;
  font-weight: ${theme.fonts.weight.bold};
  font-family: ${theme.fonts.primary};
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  border: 1px solid ${theme.primaryColor};
  border-radius: 1rem;
  transition: 0.5s;

  :hover {
    filter: contrast(115%);
  }

  :active {
    filter: brightness(0.95);
  }

  @media (max-width: 900px) {
    color: ${theme.primaryColor};
    background: ${theme.secondColor};
    margin: 0 auto;
  }
`;
