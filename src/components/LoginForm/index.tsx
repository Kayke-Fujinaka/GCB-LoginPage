import { useState } from "react";
import { useRouter } from "next/router";
import { generateToken } from "../../utils/tokenGenerator";
import ls from "localstorage-slim";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

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

interface FormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");

  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const getDecryptedUsersList = JSON.parse(
      ls.get("usersList", { decrypt: true }) || "[]"
    );

    const hasEmail = getDecryptedUsersList.find(
      (e: User) => e.user_email === email && e.user_password === password
    );

    const formDataValidators: Record<keyof FormData, (value: any) => boolean> =
      {
        email: (value) => {
          if (value === "") {
            toast.error("Preencha com um email existente");
            return false;
          }
          return true;
        },
        password: (value) => {
          if (value === "") {
            toast.error("Preencha com uma senha existente");
            return false;
          }
          if (!hasEmail) {
            toast.error("Email ou senha inválidos");
            return false;
          }
          toast.success("Seja Bem Vindo!");
          ls.set("token", generateToken(12));
          ls.set("email", email, {
            encrypt: true,
          });
          router.push("/");
          return true;
        },
      };

    const isFormValid = (data: FormData): boolean => {
      return Object.entries(data).reduce((acc, [k, v]) => {
        return acc && formDataValidators[k as keyof FormData](v);
      }, true);
    };

    isFormValid({ email, password });
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
      <div className="containerPassword">
        <Input
          name="password"
          type={typePassword}
          value={password}
          placeholder="Senha"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          htmlFor="password"
          label="Senha"
        />
        <button type="button">
          {typePassword === "password" ? (
            <AiFillEyeInvisible
              size={25}
              color={theme.label}
              onClick={() => setTypePassword("text")}
            />
          ) : (
            <AiFillEye
              size={25}
              color={theme.label}
              onClick={() => setTypePassword("password")}
            />
          )}
        </button>
      </div>
      <div className="containerForwardRef">
        <ForwardRef
          text="Não tem cadastro?&nbsp;"
          hyperLink="Cadastre-se agora!"
          link="/register"
        />
      </div>
      <Button type="submit" color={theme.button} bgColor={theme.primaryColor}>
        Entrar
      </Button>
    </Form>
  );
};
