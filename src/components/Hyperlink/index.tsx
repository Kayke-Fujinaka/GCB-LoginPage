import * as S from "./styles";

interface HyperProps {
  children: string;
  hyperlink: string;
}

export const Hyperlink = ({ children, hyperlink }: HyperProps) => {
  return (
    <S.Hyperlink>
      {children} <a href="#">{hyperlink}</a>
    </S.Hyperlink>
  );
};
