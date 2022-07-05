import * as S from "./styles";
import { ForwardRef } from "../ForwardRef";

export interface CheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  type: string;
  htmlFor: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <>
      <S.Container>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          checked={props.checked}
          required={props.required}
        />
        <label>
          <ForwardRef
            text="Eu li e aceito os "
            hyperlink="Termos de Uso"
            link="#"
          />
        </label>
      </S.Container>
    </>
  );
};
