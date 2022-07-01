import { Container } from "../../containers/Container";
import { Content } from "../../containers/Content";
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
