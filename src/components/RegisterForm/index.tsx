import { Form } from "../Form";
import { Input } from "../Input";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";
import theme from "../../styles/theme";

export const RegisterForm = () => {
  return (
    <Form>
      <Input
        name="name"
        type="text"
        autoComplete="off"
        htmlFor="name"
        label="Nome"
      />
      <Input
        name="email"
        type="text"
        autoComplete="off"
        htmlFor="email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        autoComplete="off"
        htmlFor="password"
        label="Senha"
      />
      <div className="containerText">
        <CheckBox type="checkbox" />
      </div>
      <Button type="submit"  bgColor={theme.primaryColor} color={theme.button}>Cadastrar</Button>
    </Form>
  );
};
