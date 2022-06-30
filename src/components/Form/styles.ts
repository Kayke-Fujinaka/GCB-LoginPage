import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  padding: 2.5rem 3rem;
  border-radius: 1rem;
  background-color: ${theme.secondColor};
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5);
`;