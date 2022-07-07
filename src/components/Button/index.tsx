import * as S from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  color?: string;
  bgColor?: string;
}

export function Button(props: ButtonProps) {
  return (
    <S.Button type={props.type} color={props.color} bgColor={props.bgColor}>
      {props.children}
    </S.Button>
  );
}
