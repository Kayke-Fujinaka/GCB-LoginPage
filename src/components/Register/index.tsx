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

  function handleRegister() {
    let usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    usersList.push({
      Name_LS: name,
      Email_LS: email,
      assword_LS: password,
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
        required
      />
      <Input
        name="email"
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleRegister}>Osa</button>
    </Form>
  );
};
