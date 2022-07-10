import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  min-height: 480px;
  padding: 2.5rem 3rem;
  border-radius: 1rem;
  background-color: ${theme.secondColor};
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.5);

  @media (max-width: 900px) {
    background: none;
    min-height: 620px;
    box-shadow: none;
  }

  @media (max-width: 500px) {
    max-width: 350px;
    min-height: 350px;
  }

  .logo {
    display: none;
    @media (max-width: 900px) {
      display: block;
      margin-right: 4rem;
    }
  }

  .containerPassword {
    display: flex;
    label {
      @media (max-width: 900px) {
        margin-left: 5.5rem;
      }
      @media (max-width: 500px) {
        margin-left: 4rem;
      }
    }
    button {
      display: flex;
      align-items: center;
      align-self: end;
      justify-content: center;
      width: 6rem;
      border: none;
      background-color: transparent;
    }
  }

  .containerForwardRef {
    margin-block: 2rem 5rem;
  }
`;
