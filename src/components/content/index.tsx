import React from "react";
import * as S from "./styles";
import { Heading } from "../heading";
import { Logo } from "../logo";

export const Content = () => {
  return (
    <S.Container>

      <Heading />

      <p>
        A <span>curiosidade</span> de descobrir
        <br />
        essa resposta é o que <span>nos</span>
        <br />
        <span>move</span> no dia-a-dia
      </p>

        <Logo
          src={"/logo-desktop.svg"}
          alt="GCB Logo Desktop"
          width={325}
          height={120}
        />
    </S.Container>
  );
};
