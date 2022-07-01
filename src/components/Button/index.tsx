import * as S from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  bgColor?: string;
  color?: string;
}

export function Button({ children, type, bgColor, color }: ButtonProps) {
  return <S.Button bgColor={bgColor} color={color} type={type}>{children}</S.Button>;
}
