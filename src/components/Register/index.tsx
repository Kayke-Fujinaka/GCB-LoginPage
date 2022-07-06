import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";
import theme from "../../styles/theme";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "") {
      toast.error("Preencha com um nome!");
      return;
    }

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      alert("Coloque um email válido");
      return;
    }

    if (password === "") {
      alert("Coloque um senha");
      return;
    }

    if (!checkbox) {
      alert("Preencha o Termos");
      return;
    }

    let usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    usersList.push({
      Username: name,
      User_Email: email,
      User_Password: password,
    });

    localStorage.setItem("usersList", JSON.stringify(usersList));
  }

  return (
    <Form>
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
      <Button
        onClick={handleRegister}
        bgColor={theme.primaryColor}
        color={theme.button}
        type="submit"
      >
        Cadastrar
      </Button>
    </Form>
  );
};
