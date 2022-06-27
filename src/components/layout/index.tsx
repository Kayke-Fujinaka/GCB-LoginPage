import React from "react";
import Head from "next/head";
import * as S from "./styles";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

export function Layout({ children, title, description, url }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="GCB Investimentos" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <S.Main>
        <div className="wrapper">{children}</div>
      </S.Main>
    </>
  );
}
