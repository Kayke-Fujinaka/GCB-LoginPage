import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  margin-top: 5rem;

  input {
    width: 100%;
    height: 4rem;
    font-size: 1.85rem;
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.primaryColor};
    border: none;
    border-bottom: 0.1rem solid ${theme.primaryColor};
    outline: none;

    ::placeholder {
      font-size: 1.6rem;
      font-family: ${theme.fonts.primary};
      color: ${theme.primaryColor};
      opacity: 1;
    }

    @media (max-width: 900px) {
      border-bottom: 0.125rem solid ${theme.secondColor};
      background: none;
      color: ${theme.secondColor};

      ::placeholder {
        color: ${theme.secondColor};
        opacity: 0.8;
      }
    }
  }

  label {
    display: flex;
    font-size: 2rem;
    color: ${theme.label};

    @media (max-width: 900px) {
      justify-content: center;
      color: ${theme.button};
    }
  }
`;
