import React, {useEffect} from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Home } from "../components/Home";

export default function Login() {
  useEffect(() => {
    const res = localStorage.getItem("user");
    console.log(JSON.parse(res));
  }, []);

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
