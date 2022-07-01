import React from "react";
import * as S from "./styles";
import { Heading } from "../../components/Heading";
import { Paragraph } from "../../components/Paragraph";
import { Logo } from "../../components/Logo";

export const Content = () => {
  return (
    <S.Container>
      <Heading />
      <Paragraph />
      <Logo
        src={"/logo-desktop.svg"}
        alt="GCB Logo Desktop"
        width={325}
        height={120}
      />
    </S.Container>
  );
};
