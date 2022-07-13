import styled from "styled-components";
import theme from "../../styles/theme";
import mediasQuery from "../../styles/mediasQuery";

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

  .logo {
    display: none;
  }

  .containerPassword {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid ${theme.primaryColor};
    input {
      border: 0;
    }

    button {
      align-self: end;
      border: none;
      background-color: transparent;
      .eyeIcon {
        color: ${theme.label};
      }
    }
  }

  .containerForwardRef {
    margin-block: 2rem 5rem;
  }

  @media (max-width: ${mediasQuery.mdl}) {
    background: none;
    min-height: 620px;
    box-shadow: none;

    .logo {
      display: block;
      margin-right: 4rem;
    }

    .containerPassword {
      border-bottom: 0.1rem solid ${theme.secondColor};

      input {
        border: 0;
      }

      label {
        justify-content: flex-end;
      }

      button {
        border: 0;
        .eyeIcon {
          color: ${theme.secondColor};
        }
      }
    }
  }

  @media (max-width: ${mediasQuery.mdl}) {
    max-width: 350px;
    min-height: 350px;

    .containerPassword {
      label {
        justify-content: center;
        margin-left: 5rem;
      }
    }
  }
`;
