import * as S from "./styles";

export interface InputProps {
  name: string;
  type: string;
  autoComplete: string;
  label: string;
  htmlFor: string;
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  return (
    <>
      <S.Container>
        <input
          name={props.name}
          type={props.type}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          required
        />
        <label htmlFor={props.htmlFor}>{props.label}</label>
      </S.Container>
    </>
  );
};
