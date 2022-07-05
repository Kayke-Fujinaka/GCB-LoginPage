import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { LoginForm } from "../../components/Login";
export default function Login() {
  return (
    <>
      <Container
        title="GCB Investimentos - Login"
        description="Login Page"
        url="http://localhost:3000/login"
      >
        <Content />
        <LoginForm />
      </Container>
    </>
  );
}
