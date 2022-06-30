import styled from "styled-components";
import theme from "../../styles/theme";
// #443B32
export const Button = styled.button`
  width: 20rem;
  height: 6rem;
  font-size: 2.2rem;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.button};
  border: none;
  border-radius: 1rem;
  background-color: ${theme.primaryColor};
`;

export const Button1 = styled.button`
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
`;

export const Button2 = styled.button`
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
    background-color: #52493e;
  }
`;

export const Button3 = styled.button`
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
    background-color: ${theme.button};
    color: ${theme.primaryColor};
  }
`;

export const Button4 = styled.button`
  width: 20rem;
  height: 6rem;
  font-size: 2.2rem;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.primaryColor};
  border: 1px solid ${theme.primaryColor};
  border-radius: 1rem;
  background-color: transparent;
  transition: 0.5s;

  :hover {
    background-color: ${theme.primaryColor};
    color: ${theme.button};
  }
`;
