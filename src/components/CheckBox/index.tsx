import * as S from "./styles";
import { ForwardRef } from "../ForwardRef";

export interface CheckBoxProps {
  name: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <>
      <S.Container>
        <input
          name={props.name}
          type={props.type}
          onChange={props.onChange}
        />
        <label>
          <ForwardRef
            text="Eu li e aceito os "
            hyperLink="Termos de Uso"
            link="#"
          />
        </label>
      </S.Container>
    </>
  );
};
