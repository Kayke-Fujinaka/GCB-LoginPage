import React from "react";
import Head from "next/head";
import { Input } from "../../components/Input";
import { InteractiveText } from "../../components/InteractiveText";
import { Button } from "../../components/Button";

export default function Register() {
  return (
    <>
      <Head>
        <title>GCB Investimentos</title>
        <meta name="description" content="A Grupo GCB Register Page" />
        <meta property="og:title" content="GCB Investimentos" />
        <meta property="og:description" content="A Grupo GCB Register Page" />
        <meta property="og:url" content="http://localhost:3000/register" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input
        name="name"
        type="text"
        autoComplete="off"
        htmlFor="name"
        label="Nome"
      />
      <Input
        name="email"
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
      />
      <InteractiveText text="Eu li e aceito os " hyperlink="Termos e Condições" />
      <Button>Cadastrar</Button>
    </>
  );
}
