import { Container } from "../../containers/Container";
import { Content } from "../../containers/Content";
import { LoginForm } from "../../components/LoginForm";
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
