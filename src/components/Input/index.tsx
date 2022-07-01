import * as S from "./styles";

interface InputProps {
  name: string;
  type: string;
  autoComplete: string;
  label: string;
  htmlFor: string;
}

export const Input = (props: InputProps) => {
  return (
    <>
      <S.Container>
        <input
          name={props.name}
          type={props.type}
          autoComplete={props.autoComplete}
          required
        />
        <label htmlFor={props.htmlFor}>{props.label}</label>
      </S.Container>
    </>
  );
};
