import { useState } from "react";
import { useRouter } from "next/router";

import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

import { checkPasswordValidation } from "../../utils/passwordValidator";
import theme from "../../styles/theme";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    const user = {
      username: name,
      user_email: email,
      user_password: password,
    };

    if (name === "") {
      return toast.error("Preencha o campo de Nome!");
    }

    if (email === "") {
      return toast.error("Preencha o campo de Email!");
    }

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      return toast.error("Coloque um email válido");
    }

    if (password === "") {
      return toast.error("Preencha o campo de senha");
    }

    const isValidPassword = checkPasswordValidation(user.user_password);
    if (!isValidPassword.result) {
      return alert(isValidPassword.errors);
    }

    if (!checkbox) {
      return toast.error("Aceite os Termos de Uso");
    }

    localStorage.setItem("usersList", JSON.stringify([...usersList, user]));
    toast.success("Usuário cadastrado com sucesso");
    router.push("/login");
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
        onChange={(e) => setName(e.target.value)}
      />
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
        <CheckBox
          name="terms"
          type="checkbox"
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
      <Button bgColor={theme.primaryColor} color={theme.button} type="submit">
        Cadastrar
      </Button>
    </Form>
  );
};
