import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./background.svg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 65vh;
`;

export const Wrapper = styled.div`
  max-width: 128rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
