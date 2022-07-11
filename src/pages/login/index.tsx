import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { LoginForm } from "../../components/LoginForm";
export default function Login() {
  return (
    <>
      <Container
        title="GCB Investimentos - Login"
        description="Login Page"
      >
        <Content />
        <LoginForm />
      </Container>
    </>
  );
}
