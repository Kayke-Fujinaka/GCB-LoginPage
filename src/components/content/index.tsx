import React from "react";
import Image from "next/image";
import * as S from "./styles";
import logo from "../../../public/gcb-desktop.svg";

export function Content() {
  return (
    <S.Container>
      <h1>
        Até onde conseguimos
        <br />
        chegar?
      </h1>

      <p>
        A <strong>curiosidade</strong> de descobrir
        <br />
        essa resposta é o que <strong>nos</strong>
        <br />
        <strong>move</strong> no dia-a-dia
      </p>

      <Image src={logo} alt="GCB Logo" width={300} height={120} />
    </S.Container>
  );
}
