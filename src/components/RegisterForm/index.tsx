import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { checkPasswordValidation } from "../../utils/passwordValidator";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

import theme from "../../styles/theme";

interface ValidationProps {
  value?: string;
  errorKeyName: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  checkbox: boolean;
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

    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");

    const user = {
      name: name,
      email: email,
      password: password,
    };

    const isValidPassword = checkPasswordValidation(user.password);

    function hasFieldFilled({ value, errorKeyName }: ValidationProps) {
      if (!value) {
        toast.error(`Preencha o campo de ${errorKeyName}`);
        return false;
      }
      return true;
    }

    const formDataValidators: Record<
      keyof FormData,
      (value: string) => boolean
    > = {
      name: (value) => hasFieldFilled({ value, errorKeyName: "nome" }),
      email: (value) => {
        if (!hasFieldFilled({ value, errorKeyName: "email" })) return false;
        if (!EMAIL_REGEX.test(String(value).toLowerCase())) {
          toast.error("Insira um email válido");
          return false;
        }
        if (value) {
          for (let i = 0; i < usersList.length; i++) {
            if (value === usersList[i].email) {
              toast.error("Usuário já existe!");
              return false;
            }
          }
        }
        return true;
      },
      password: (value) => {
        if (!hasFieldFilled({ value, errorKeyName: "senha" })) return false;
        if (!isValidPassword.result) {
          alert(isValidPassword.errors);
          return false;
        }
        return true;
      },
      checkbox: (value) => {
        if (!value) {
          toast.error("Aceite os termos de uso!");
          return false;
        }
        Object.assign(user, {
          password: window.btoa(password),
        });
        localStorage.setItem("usersList", JSON.stringify([...usersList, user]));
        toast.success("Usuário cadastrado com sucesso");
        router.push("/login");
        return true;
      },
    };

    const isFormValid = (data: FormData): boolean => {
      return Object.entries(data).reduce((acc, [k, v]) => {
        return acc && formDataValidators[k as keyof FormData](v);
      }, true);
    };

    isFormValid({ name, email, password, checkbox });
  }
  return (
    <Form onSubmit={handleRegister}>
      <Input
        name="name"
        type="text"
        value={name}
        placeholder="Nome"
        autoComplete="off"
        id="name"
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
        id="email"
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
          id="password"
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
