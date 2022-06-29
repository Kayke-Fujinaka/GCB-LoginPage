import * as S from "./styles";

interface InputProps {
  name: string;
  type: string;
  autoComplete: string;
  label: string;
  htmlFor: string;
}

export const Input = ({
  name,
  type,
  autoComplete,
  label,
  htmlFor,
}: InputProps) => {
  return (
    <>
      <S.Container>
        <input name={name} type={type} autoComplete={autoComplete} required />
        <label htmlFor={htmlFor}>{label}</label>
      </S.Container>
    </>
  );
};
