import { useState } from "react";
import { useRouter } from "next/router";
import ls from "localstorage-slim";
import { toast } from "react-toastify";
import { generateToken } from "../../utils/tokenGenerator";

import { Form } from "../Form";
import { Input } from "../Input";
import { ForwardRef } from "../ForwardRef";
import { Button } from "../Button";

import theme from "../../styles/theme";

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

    const getDecryptedUserList = JSON.parse(
      ls.get("getDecryptedUserList", { decrypt: true }) || "[]"
    );

    const isFilledField = email === "" || password === "";

    if (isFilledField) {
      return toast.error("Preencha todos os campos");
    }

    const hasEmail = getDecryptedUserList.find(
      (e: User) => e.user_email === email && e.user_password === password
    );
    if (!hasEmail) {
      toast.error("Email ou senha inválidos");
      return;
    } else {
      toast.success("Seja Bem Vindo!");
      ls.set("token", generateToken(12));
      ls.set("email", email, {
        encrypt: true,
      });
      router.push("/");
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        htmlFor="email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={password}
        placeholder="Senha"
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        htmlFor="password"
        label="Senha"
      />
      <div className="containerForwardRef">
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
