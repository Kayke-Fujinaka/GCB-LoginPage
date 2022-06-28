import React from "react";
import Image from "next/image";
import * as S from "./styles";
import logo from "../../../public/gcb-desktop.svg";

export const Content = () => {
  return (
    <S.Container>
      <h1>
        Até onde conseguimos
        <br />
        chegar?
      </h1>

      <p>
        A <span>curiosidade</span> de descobrir
        <br />
        essa resposta é o que <span>nos</span>
        <br />
        <span>move</span> no dia-a-dia
      </p>

      <div>
        <Image src={logo} alt="GCB Logo" width={325} height={120} />
      </div>
    </S.Container>
  );
}
