import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

export interface ButtonProps {
  bgColor?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 50%;
  height: 6rem;
  font-size: 2.2rem;
  font-weight: ${theme.fonts.weight.bold};
  font-family: ${theme.fonts.primary};
  color: ${(props) => props.color};
  border: 0.1rem solid ${theme.primaryColor};
  border-radius: 1rem;
  background: ${(props) => props.bgColor};

  :hover {
    filter: contrast(115%);
  }

  :active {
    filter: contrast(125%);
  }

  @media (max-width: ${mediasQuery.mdl}) {
    color: ${theme.primaryColor};
    background: ${theme.secondColor};
    margin: 0 auto;
  }

  @media (max-width: ${mediasQuery.sm}) {
    font-size: 1.8rem;
    height: 5rem;
  }
`;
