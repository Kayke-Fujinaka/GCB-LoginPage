import React from "react";
import { Content } from "../components/content";
import { Container } from "../components/container";

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
