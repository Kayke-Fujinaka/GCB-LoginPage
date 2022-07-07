import * as S from "./styles";

export interface ForwardRefProps {
  text: string;
  hyperLink: string;
  link: string;
};

export const ForwardRef = (props: ForwardRefProps) => {
  return (
    <>
      <S.ForwardRef>
        {props.text}
        <a href={props.link}>{props.hyperLink}</a>
      </S.ForwardRef>
    </>
  );
};
