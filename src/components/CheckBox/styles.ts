import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-block: 1.5rem 5rem;

  input[type="checkbox"] {
    opacity: 0.5;
    position: absolute;
    margin-left: 0.2rem;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.primaryColor};
    cursor: pointer;
    ::before {
      content: "";
      width: 0.8em;
      height: 0.8em;
      border-radius: 0.15em;
      margin-right: 0.5em;
      border: 0.1em solid black;
    }
  }

  input[type="checkbox"]:checked + label::before {
    background-color: ${theme.primaryColor};
  }
`;
