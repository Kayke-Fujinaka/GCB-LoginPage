import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { HomeForm } from "../components/HomeForm";

interface User {
  username: string;
  user_email: string;
  user_password: string;
}

export default function Home() {
  const [user, setUser] = React.useState({
    user_email: "",
    username: "",
  });

  const router = useRouter();

  useEffect(() => {
    const listUsers = JSON.parse(localStorage.getItem("usersList") || "{}");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !listUsers) {
      router.push("/login");
    } else {
      const getUser = listUsers.find((e: User) => e.user_email === email);
      setUser(getUser);
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
        <HomeForm username={user.username} user_email={user.user_email} />
      </Container>
    </>
  );
}
