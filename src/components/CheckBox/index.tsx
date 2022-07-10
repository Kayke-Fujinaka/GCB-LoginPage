import { useState } from "react";
import { ForwardRef } from "../ForwardRef";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as S from "./styles";

export interface CheckBoxProps {
  name: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckBox = (props: CheckBoxProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <S.Container>
        <input name={props.name} type={props.type} onChange={props.onChange} />
        <label>
          <ForwardRef
            text="Eu li e aceito os "
            hyperLink="Termos de Uso"
            link="#"
            handleShow={handleShow}
          />
        </label>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Termos de Uso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta
            nibh venenatis cras sed felis eget velit aliquet. Congue nisi vitae
            suscipit tellus mauris a diam maecenas sed. Eget nunc scelerisque
            viverra mauris. Augue interdum velit euismod in. Porta lorem mollis
            aliquam ut porttitor leo a. Pulvinar neque laoreet suspendisse
            interdum consectetur. Nisl nunc mi ipsum faucibus vitae. Quam id leo
            in vitae turpis massa sed elementum tempus. A diam sollicitudin
            tempor id eu nisl. Nisl vel pretium lectus quam id leo in vitae.
            Mattis enim ut tellus elementum sagittis vitae et leo duis. Nunc
            consequat interdum varius sit amet mattis vulputate. Nulla at
            volutpat diam ut venenatis tellus. Ultricies leo integer malesuada
            nunc. Phasellus faucibus scelerisque eleifend donec pretium. Sit
            amet facilisis magna etiam. Amet mauris commodo quis imperdiet massa
            tincidunt. Aliquet lectus proin nibh nisl condimentum id. Pulvinar
            proin gravida hendrerit lectus a.
            <br /> <br />
            Nam at lectus urna duis convallis. Venenatis cras sed felis eget
            velit aliquet sagittis. Id faucibus nisl tincidunt eget nullam non
            nisi est. Interdum velit euismod in pellentesque. Rutrum tellus
            pellentesque eu tincidunt tortor aliquam nulla facilisi. Laoreet non
            curabitur gravida arcu. Ridiculus mus mauris vitae ultricies leo
            integer malesuada nunc. Vitae sapien pellentesque habitant morbi
            tristique senectus et netus et. Pretium vulputate sapien nec
            sagittis aliquam malesuada. Et ligula ullamcorper malesuada proin
            libero nunc consequat. Turpis egestas sed tempus urna et pharetra
            pharetra massa massa. Lorem sed risus ultricies tristique nulla
            aliquet enim tortor. Nibh nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque. Eget gravida cum sociis
            natoque.
            <br /> <br />
            Pretium nibh ipsum consequat nisl vel. Sit amet volutpat consequat
            mauris nunc. Et molestie ac feugiat sed lectus. Id porta nibh
            venenatis cras sed. Feugiat sed lectus vestibulum mattis ullamcorper
            velit. Commodo odio aenean sed adipiscing diam donec adipiscing.
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
            Egestas erat imperdiet sed euismod nisi. Eget nunc scelerisque
            viverra mauris. Arcu ac tortor dignissim convallis aenean. Accumsan
            in nisl nisi scelerisque eu ultrices. Sapien et ligula ullamcorper
            malesuada proin. Vitae proin sagittis nisl rhoncus mattis rhoncus.
            Aliquet nec ullamcorper sit amet risus nullam. Potenti nullam ac
            tortor vitae purus faucibus ornare suspendisse sed. Purus non enim
            praesent elementum facilisis leo vel fringilla. Diam sollicitudin
            tempor id eu nisl nunc mi. Libero id faucibus nisl tincidunt eget.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </S.Container>
    </>
  );
};
