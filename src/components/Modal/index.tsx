// import { useState } from "react";
import { FiX } from "react-icons/fi";
import * as S from "./styles";

interface ModalProps {
  setOpenModal: (value: boolean) => void
}

export const Modal = (props: ModalProps) => {
  return (
    <>
      <S.Modal>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              id="buttonTop"
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              <FiX size={25} />
            </button>
          </div>
          <div className="title">
            <h1>Termos de Uso</h1>
          </div>
          <div className="body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Condimentum vitae sapien pellentesque habitant morbi. In hendrerit
              gravida rutrum quisque. Nisi scelerisque eu ultrices vitae auctor
              eu augue ut. Gravida neque convallis a cras semper auctor neque.
              Diam vulputate ut pharetra sit amet aliquam id.
            </p>
            <br />
            <p>
              Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper eget. Dolor sit amet consectetur adipiscing elit duis
              tristique. Purus non enim praesent elementum facilisis leo vel
              fringilla est. Sagittis purus sit amet volutpat.
            </p>
            <br />
            <p>
              Urna nec tincidunt praesent semper feugiat nibh. Sagittis orci a
              scelerisque purus. Amet risus nullam eget felis. Feugiat vivamus
              at augue eget arcu dictum. Lacus vestibulum sed arcu non odio
              euismod. Duis ut diam quam nulla porttitor massa id neque. Non
              enim praesent elementum facilisis.
            </p>
            <br />
            <p>
              Nibh mauris cursus mattis molestie a. Quam nulla porttitor massa
              id. Auctor eu augue ut lectus. Quis risus sed vulputate odio.
              Massa vitae tortor condimentum lacinia quis vel eros. Et netus et
              malesuada fames ac turpis egestas maecenas pharetra.
            </p>
            <br />
            <p>
              Placerat in egestas erat imperdiet sed euismod nisi porta lorem.
              In eu mi bibendum neque egestas congue quisque egestas diam. Purus
              semper eget duis at tellus at urna condimentum mattis.
            </p>
            <br />
            <p>
              A scelerisque purus semper eget duis at tellus at. Vivamus at
              augue eget arcu dictum. Phasellus egestas tellus rutrum tellus
              pellentesque eu tincidunt. Nunc vel risus commodo viverra maecenas
              accumsan.
            </p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
              type="button"
            >
              Continuar
            </button>
          </div>
        </div>
      </S.Modal>
    </>
  );
};
