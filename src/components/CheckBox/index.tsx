import * as S from "./styles";
import { InteractiveText } from "../InteractiveText";

interface CheckBoxProps {
  type: string;
}

export const CheckBox = ({ type }: CheckBoxProps) => {
  return (
    <>
      <S.Container>
        <input type={type} />
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
