import React from "react";
import { Content } from "../components/Content";
import { Container } from "../components/Container";

export default function Login() {
  return (
    <>
      <Container
        title="GCB Investimentos - Login"
        description="Login Page"
        url="http://localhost:3000/"
      >
        <Content />
      </Container>
    </>
  );
}
