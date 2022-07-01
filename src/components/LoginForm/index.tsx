import { Form } from "../../containers/Form";
import { Input } from "../Input";
import { InteractiveText } from "../InteractiveText";
import { Button } from "../Button";

export const LoginForm = () => {
  return (
    <Form>
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
        <InteractiveText
          text="Não tem cadastro? "
          hyperlink="Cadastre-se agora!"
          link="http://localhost:3000/register"
        />
      </div>
      <Button>Entrar</Button>
    </Form>
  );
};
