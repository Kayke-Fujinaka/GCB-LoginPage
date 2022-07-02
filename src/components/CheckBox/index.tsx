import * as S from "./styles";
import { InteractiveText } from "../InteractiveText";

export interface CheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  type: string;
  htmlFor: string;
  required?: boolean;
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
          <InteractiveText
            text="Eu li e aceito os "
            hyperlink="Termos de Uso"
            link="#"
          />
        </label>
      </S.Container>
    </>
  );
};
