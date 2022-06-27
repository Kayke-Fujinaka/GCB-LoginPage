import React from "react";
import Head from "next/head";

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
        <title>GCB Investimentos - {title}</title>
        <meta name="description" content={description + " Page"} />
        <meta property="og:title" content="GCB Investimentos" />
        <meta property="og:description" content={description + " Page"} />
        <meta property="og:url" content={"http://localhost:3000/" + url} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
}
