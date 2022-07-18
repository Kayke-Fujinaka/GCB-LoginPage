import * as S from "./styles";

export interface InputProps {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  autoComplete: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          id={props.id}
          onChange={props.onChange}
        />
      </S.Container>
    </>
  );
};
