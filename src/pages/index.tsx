import React from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Home } from "../components/Home";

export default function Login() {
  return (
    <>
      <Container
        title="GCB Investimentos - Home"
        description="Home Page"
        url="http://localhost:3000/"
      >
        <Content />
        <Home />
      </Container>
    </>
  );
}
