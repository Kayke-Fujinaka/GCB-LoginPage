import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Form } from "../Form";
import { Input } from "../Input";
import { ForwardRef } from "../ForwardRef";
import { Button } from "../Button";

import theme from "../../styles/theme";
import { toast } from "react-toastify";

interface User {
  username: string;
  user_email: string;
  user_password: string;
}

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");

    if (email === "") {
      return toast.error("Preencha o campo de Nome!");
    }

    if (password === "") {
      return toast.error("Preencha o campo de senha");
    }

    const hasEmail = usersList.filter(
      (e: User) => e.user_email === email && e.user_password === password
    );
    if (!hasEmail) {
      toast.error("Email ou senha inválidos");
      return;
    } else {
      toast.success("Seja Bem Vindo!");
      router.push("/");
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Input
        name="email"
        type="email"
        value={email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        htmlFor="email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={password}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        htmlFor="password"
        label="Senha"
      />
      <div className="containerText">
        <ForwardRef
          text="Não tem cadastro?&nbsp;"
          hyperLink="Cadastre-se agora!"
          link="http://localhost:3000/register"
        />
      </div>
      <Button type="submit" color={theme.button} bgColor={theme.primaryColor}>
        Entrar
      </Button>
    </Form>
  );
};
