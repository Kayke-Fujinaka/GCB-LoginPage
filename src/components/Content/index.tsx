import React from "react";
import * as S from "./styles";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Logo } from "./Logo";

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
