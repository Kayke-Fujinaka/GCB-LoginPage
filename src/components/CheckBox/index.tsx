import * as S from "./styles";
import { ForwardRef } from "../ForwardRef";

export interface CheckBoxProps {
  id: string;
  name: string;
  type: string;
  htmlFor: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <>
      <S.Container>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          onChange={props.onChange}
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
