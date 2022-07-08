import { Form } from "../Form";
import { useRouter } from "next/router";
import { Button } from "../Button";
import theme from "../../styles/theme";
import * as S from "./styles";

export interface HomeProps {
    username: string;
    user_email: string;
}

export const HomeForm = (props: HomeProps) => {
  const router = useRouter();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
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
