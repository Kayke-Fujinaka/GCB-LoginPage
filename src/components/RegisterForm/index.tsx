import { useState } from "react";
import { useRouter } from "next/router";
import ls from "localstorage-slim";
import { toast } from "react-toastify";
import { checkPasswordValidation } from "../../utils/passwordValidator";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

import theme from "../../styles/theme";

interface User {
  username: string;
  user_email: string;
  user_password: string;
}

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");
  const [checkbox, setCheckbox] = useState(false);

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const usersList = JSON.parse(
      ls.get("usersList", { decrypt: true }) || "[]"
    );
    const user = {
      username: name,
      user_email: email,
      user_password: password,
    };

    const isFilledField =
      name === "" || email === "" || password === "" || !checkbox;
    if (isFilledField) {
      return toast.error("Preencha todos os campos!");
    }

    if (!EMAIL_REGEX.test(String(email).toLowerCase())) {
      return toast.error("Coloque um email válido");
    }

    const isValidPassword = checkPasswordValidation(user.user_password);
    if (!isValidPassword.result) {
      return alert(isValidPassword.errors);
    }

    for (let i = 0; i < usersList.length; i++) {
      if (email === usersList[i].user_email) {
        return toast.error("Usuário já existe!");
      }
    }

    ls.set("usersList", JSON.stringify([...usersList, user]), {
      encrypt: true,
    });
    toast.success("Usuário cadastrado com sucesso");
    router.push("/login");
  }
  return (
    <Form onSubmit={handleRegister}>
      <Input
        name="name"
        type="text"
        value={name}
        placeholder="Nome"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
        htmlFor="name"
        label="Nome"
      />
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
          value={password}
          type={typePassword}
          placeholder="Senha"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          htmlFor="password"
          label="Senha"
        />
        <button type="button">
          {typePassword === "password" ? (
            <AiFillEyeInvisible
              className="eyeIcon"
              size={25}
              onClick={() => setTypePassword("text")}
            />
          ) : (
            <AiFillEye
              className="eyeIcon"
              size={25}
              onClick={() => setTypePassword("password")}
            />
          )}
        </button>
      </div>
      <div className="containerForwardRef">
        <CheckBox
          name="terms"
          type="checkbox"
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
      <Button type="submit" color={theme.button} bgColor={theme.primaryColor}>
        Cadastrar
      </Button>
    </Form>
  );
};
