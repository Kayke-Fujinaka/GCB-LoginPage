import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { RegisterForm } from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <Container
        title="GCB Investimentos - Register"
        description="Register Page"
        url="http://localhost:3000/register"
      >
        <Content />
        <RegisterForm />
      </Container>
    </>
  );
}
