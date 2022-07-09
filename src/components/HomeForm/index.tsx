import { useRouter } from "next/router";
import ls from "localstorage-slim";

import { Form } from "../Form";
import { Button } from "../Button";

import * as S from "./styles";
import theme from "../../styles/theme";

export interface HomeProps {
  username: string;
  user_email: string;
}

export const HomeForm = (props: HomeProps) => {
  const keysToRemove = ["email", "token"];

  const router = useRouter();

  const handleLogout = (): void => {
    keysToRemove.forEach((k) => ls.remove(k));
    router.push("/login");
  };

  return (
    <>
      <Form>
        <S.Heading>Seja Bem Vindo ao Grupo GCB!</S.Heading>
        <S.Span>
          <p>
            <span>Nome: </span>
            {props.username}
          </p>
          <p>
            <span>Email: </span>
            {props.user_email}
          </p>
        </S.Span>
        <Button
          type="submit"
          color={theme.button}
          bgColor={theme.primaryColor}
          handleLogout={handleLogout}
        >
          Logout
        </Button>
      </Form>
    </>
  );
};
