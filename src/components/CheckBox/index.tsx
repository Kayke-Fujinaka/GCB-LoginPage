import { useState } from "react";
import { ForwardRef } from "../ForwardRef";
import { Modal } from "../Modal";
import * as S from "./styles";

export interface CheckBoxProps {
  name: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckBox = (props: CheckBoxProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <S.Container>
        <input name={props.name} type={props.type} onChange={props.onChange} />
        <label>
          <ForwardRef
            text="Eu li e aceito os "
            hyperLink="Termos de Uso"
            link="#"
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </label>
      </S.Container>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};
