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
    border-bottom: 0.1rem solid #423b32;
    outline: none;

    :focus + label,
    :valid + label
    {
      transform: translateY(-30px);
      font-size: 2rem;
      color: ${theme.label};
      @media (max-width: 900px) {
        top: 50%;
        left: 47.5%;
        margin: -25px 0 0 -25px;
        color: ${theme.button};
      }
    }

    @media (max-width: 900px) {
      border-bottom: 1.25px solid ${theme.secondColor};
      background: none;
      color: ${theme.secondColor};
    }
  }

  label {
    position: absolute;
    left: 0;
    top: 0.5rem;
    pointer-events: none;
    transition: 0.5s;
    font-size: 1.85rem;
    color: ${theme.primaryColor};
    @media (max-width: 900px) {
      color: ${theme.secondColor};
    }
  }
`;
