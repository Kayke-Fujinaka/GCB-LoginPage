import { Form } from "../Form";
import { useRouter } from "next/router";
import { Button } from "../Button";
import theme from "../../styles/theme";
import * as S from "./styles";

interface HomeProps {
  username: string;
  user_email: string;
}

export const Home = (props: HomeProps) => {
  const router = useRouter();

  const handleLogout = (): void => {
    localStorage.removeItem("usersList");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <Form>
        <S.Heading>Seja Bem Vindo ao Grupo GCB!</S.Heading>
        <S.Span>
          <p style={{ fontSize: "1.6rem" }}>
            <span>Nome:</span> {props.username}
          </p>
          <p style={{ fontSize: "1.6rem" }}>
            <span>Email:</span> {props.user_email}
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
