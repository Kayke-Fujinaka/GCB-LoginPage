import * as S from "./styles";
import { Logo } from "../Logo";
interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export const Form = ({ children }: FormProps) => {
  return (
    <S.Container>
      <div className="logo">
        <Logo src="/logo-mobile.svg" alt="GCB Logo" width={420} height={120} />
      </div>
      {children}
    </S.Container>
  );
};
