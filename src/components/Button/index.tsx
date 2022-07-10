import * as S from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  color?: string;
  bgColor?: string;
  handleLogout?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <S.Button type={props.type} color={props.color} bgColor={props.bgColor} onClick={props.handleLogout}>
      {props.children}
    </S.Button>
  );
}
