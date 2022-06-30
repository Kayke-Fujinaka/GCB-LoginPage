import * as S from "./styles";
interface FormProps {
  children: React.ReactNode;
}

export const Form = ({children}: FormProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};
