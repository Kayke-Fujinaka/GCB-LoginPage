import styled from "styled-components";
import theme from "../../styles/theme";

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

// export const Button1 = styled.button`

//   width: 20rem;
//   height: 6rem;
//   font-size: 2.5rem;
//   font-weight: ${theme.fonts.weight.bold};
//   color: ${theme.button};
//   border: none;
//   border-radius: 1rem;
//   background-color: ${theme.primaryColor};
//   transition: .5s;

//   :hover {
//     background-color: #2E2923;
//   }
// `;

// export const Button2 = styled.button`

//   width: 20rem;
//   height: 6rem;
//   font-size: 2.5rem;
//   font-weight: ${theme.fonts.weight.bold};
//   color: ${theme.button};
//   border: none;
//   border-radius: 1rem;
//   background-color: ${theme.primaryColor};
//   transition: 0.5s;

//   :hover {
//     background-color: #52493E;
//   }
// `;
