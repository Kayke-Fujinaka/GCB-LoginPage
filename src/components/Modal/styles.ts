import styled from "styled-components";
import theme from "../../styles/theme";

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modalContainer {
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 65rem;
    padding: 1.5rem;
    border-radius: 1.2rem;
    background-color: ${theme.secondColor};
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;
    @media (max-width: 500px) {
      width: 35rem;
    }
    @media (max-width: 350px) {
      width: 28rem;
    }

    .title {
      text-align: center;
    }

    .body {
      text-align: justify;
      padding: 1rem;
      margin-block: 2.5rem;
      font-size: 1.7rem;
      overflow-y: auto;
      @media (max-width: 500px) {
        font-size: 1.45rem;
      }
    }

    .footer {
      display: flex;
      justify-content: center;

      button {
        width: 15rem;
        height: 4.5rem;
        margin: 1rem;
        font-size: 2rem;
        color: ${theme.button};
        background-color: ${theme.primaryColor};
        border: none;
        border-radius: 0.8rem;
        cursor: pointer;
        @media (max-width: 500px) {
          font-size: 1.75rem;
        }
      }
    }
  }

  .titleCloseBtn {
    display: flex;
    justify-content: flex-end;

    button {
      font-size: 2.5rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
