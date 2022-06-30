import * as S from "./styles";
import { Input } from "../../components/Input";
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
      <InteractiveText
        text="Eu li e aceito os "
        hyperlink="Termos e Condições"
      />
      <Button>Cadastrar</Button>
    </S.Container>
  );
};
