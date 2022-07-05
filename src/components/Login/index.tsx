import { Form } from "../Form";
import { Input } from "../Input";
import { ForwardRef } from "../ForwardRef";
import { Button } from "../Button";
import theme from "../../styles/theme";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Form>
      <Input
        name="email"
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
        onChange={(e) => [setPassword(e.target.value), setError("")]}
      />
      <div className="containerText">
        <ForwardRef
          text="Não tem cadastro? "
          hyperlink="Cadastre-se agora!"
          link="http://localhost:3000/register"
        />
      </div>
      <Button type="button" bgColor={theme.primaryColor} color={theme.button}>
        Entrar
      </Button>
    </Form>
  );
};
