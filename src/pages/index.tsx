import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Home } from "../components/HomeForm";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usersList") || "{}");
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      const [{ username, user_email }] = user;
      setUser(username);
      setEmail(user_email);
    }
  }, [router]);

  return (
    <>
      <Container
        title="GCB Investimentos - Home"
        description="Home Page"
        url="http://localhost:3000/"
      >
        <Content />
        <Home username={user} user_email={email} />
      </Container>
    </>
  );
}
