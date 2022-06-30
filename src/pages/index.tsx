import React from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Form } from "../components/Form";

export default function Login() {
  return (
    <>
      <Container
        title="GCB Investimentos - Login"
        description="Login Page"
        url="http://localhost:3000/"
      >
        <Content />
        <Form />
      </Container>
    </>
  );
}
