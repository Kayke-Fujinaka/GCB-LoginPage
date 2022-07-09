import React from "react";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Logo } from "../Logo";
import * as S from "./styles";

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
