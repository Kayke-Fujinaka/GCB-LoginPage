import * as S from "./styles";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/CheckBox";
import { InteractiveText } from "../../components/InteractiveText";
import { Button } from "../../components/Button";

export const Form = () => {
  return (
    <S.Container>
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
        <CheckBox type="checkbox" />
      <Button>Cadastrar</Button>
    </S.Container>
  );
};
