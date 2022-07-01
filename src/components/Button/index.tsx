import * as S from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  bgColor?: string;
  color?: string;
}

export function Button(props: ButtonProps) {
  return (
    <S.Button bgColor={props.bgColor} color={props.color} type={props.type}>
      {props.children}
    </S.Button>
  );
}
