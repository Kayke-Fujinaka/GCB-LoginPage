import * as S from "./styles";

export interface InputProps {
  name: string;
  type: string;
  value: string;
  autoComplete: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  htmlFor: string;
  label: string;
}

export const Input = (props: InputProps) => {
  return (
    <>
      <S.Container>
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </S.Container>
    </>
  );
};
