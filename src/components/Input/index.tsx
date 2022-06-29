import * as S from "./styles";

interface InputProps {
  children: React.ReactNode;
}

export const Input = ({ children }: InputProps) => {
  return (
    <>
      <S.Container>
        <input type="text" autoComplete="off" required />
        <span>Email</span>
      </S.Container>
      <S.Container>
        <input type="text" autoComplete="off" required />
        <span>Nome</span>
      </S.Container>
      <S.Container>
        <input type="text" autoComplete="off" required />
        <span>Senha</span>
      </S.Container>
    </>
  );
};
