import * as S from "./styles";
import { Logo } from "../Logo";
export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form = (props: FormProps) => {
  return (
    <S.Container onSubmit={props.onSubmit}>
      <div className="logo">
        <Logo src="/logo-mobile.svg" alt="GCB Logo" width={420} height={120} />
      </div>
      {props.children}
    </S.Container>
  );
};
