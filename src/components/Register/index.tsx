import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";
import theme from "../../styles/theme";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {

  }

  return (
    <Form onSubmit={handleRegister}>
      <Input
        name="name"
        type="text"
        autoComplete="off"
        htmlFor="name"
        label="Nome"
        value={name}
        onChange={(e) => [setName(e.target.value), setError("")]}
      />
      <Input
        name="email"
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
      />
      <div className="containerText">
        <CheckBox
          id="terms"
          name="terms"
          type="checkbox"
          htmlFor="terms"
          required
          checked={true}
        />
      </div>
      <Button type="submit" bgColor={theme.primaryColor} color={theme.button}>
        Cadastrar
      </Button>
    </Form>
  );
};
