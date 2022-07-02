import React from "react";
import Head from "next/head";
import * as S from "./styles";
export interface ContainerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

export const Container = (props: ContainerProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content="GCB Investimentos" />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <S.Main>
        <div className="wrapper">{props.children}</div>
      </S.Main>
    </>
  );
};
