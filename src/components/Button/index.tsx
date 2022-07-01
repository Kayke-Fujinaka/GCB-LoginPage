import * as S from "./styles";

interface ButtonProps {
    children: React.ReactNode;
  }

export const Button = ({ children }: ButtonProps) => {
  return (
    <>
    <S.Button>{children}</S.Button>
    </>
  );
};