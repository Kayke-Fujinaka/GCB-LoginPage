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

    let usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    const user = {
      username: name,
      user_email: email,
      user_password: password,
    };

    if (name === "") {
      toast.error("Preencha o campo de Nome!");
      return;
    }

    if (email === "") {
      toast.error("Preencha o campo de Email!");
      return;
    }

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      toast.error("Coloque um email válido");
      return;
    }

    if (password === "") {
      toast.error("Preencha o campo de senha");
      return;
    }

    const isValid = checkPasswordValidation(user.user_password);
    if (!isValid.result) {
      alert(isValid.errors);
      return;
    }

    if (!checkbox) {
      toast.error("Aceite os Termos de Uso");
      return;
    }

    localStorage.setItem("usersList", JSON.stringify([...usersList, user]));
    toast.success("Usuário cadastrado com sucesso");
    router.push("/login");
  }

  return (
    <Form handle={handleRegister}>
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
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="containerText">
        <CheckBox
          id="terms"
          name="terms"
          type="checkbox"
          htmlFor="terms"
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
      <Button bgColor={theme.primaryColor} color={theme.button} type="submit">
        Cadastrar
      </Button>
    </Form>
  );
};
