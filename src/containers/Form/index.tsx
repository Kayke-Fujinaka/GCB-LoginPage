import * as S from "./styles";
import { Logo } from "../../components/Logo";
interface FormProps {
  children: React.ReactNode;
}

export const Form = ({ children }: FormProps) => {
  return (
    <S.Container>
        <Logo src="/logo-mobile.svg" alt="GCB Logo" width={420} height={120} />
      {children}
    </S.Container>
  );
};
