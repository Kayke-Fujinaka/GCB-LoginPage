import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    opacity: 0;
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
      border-radius: 0.15rem;
      margin-right: 0.5rem;
      align-items: center;
      border: 0.1rem solid black;
    }
  }

  input[type="checkbox"]:checked + label::before {
    background-color: ${theme.primaryColor};
  }

  @media (max-width: ${mediasQuery.mdl}) {
    label::before {
      border: 0.1em solid white;
    }

    input[type="checkbox"]:checked + label::before {
      background-color: ${theme.secondColor};
    }
  }
`;
