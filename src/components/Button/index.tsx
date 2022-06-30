import * as S from "./styles";

interface ButtonProps {
    children: React.ReactNode;
  }

export const Button = ({ children }: ButtonProps) => {
  return (
    <>
    <S.Button>{children}</S.Button>
    {/* <S.Button1>{children}</S.Button1>
    <S.Button2>{children}</S.Button2> */}
    </>
  );
};
