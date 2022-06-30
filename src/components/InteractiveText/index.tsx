import * as S from "./styles";

type InteractiveTextProps = {
  text: string;
  hyperlink: string;
  link: string;
};

export const InteractiveText = (props: InteractiveTextProps) => {
  return (
    <>
      <S.InteractiveText>
        {props.text}
        <a href={props.link}>{props.hyperlink}</a>
      </S.InteractiveText>
    </>
  );
};
