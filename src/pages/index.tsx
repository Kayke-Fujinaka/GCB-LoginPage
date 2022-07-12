import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { HomeForm } from "../components/HomeForm";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const [user, setUser] = React.useState({
    email: "",
    name: "",
  });

  const router = useRouter();

  useEffect(() => {
    const listUsers = JSON.parse(localStorage.getItem("usersList") || "{}");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !listUsers) {
      router.push("/login");
    } else {
      const getUser = listUsers.find((user: User) => user.email === email);
      setUser(getUser);
    }
  }, [router]);

  return (
    <>
      <Container title="GCB Investimentos - Home" description="Home Page">
        <Content />
        <HomeForm name={user.name} email={user.email} />
      </Container>
    </>
  );
}
