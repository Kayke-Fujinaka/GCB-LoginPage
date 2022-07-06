import { Form } from "../Form";
import { Button } from "../Button";
import theme from "../../styles/theme";

let user = {
  name: "Euuuu",
  password: "123",
};

export const Home = () => {
  function test() {
    localStorage.setItem("user", JSON.stringify(user));
  }
  return (
    <>
      <Form>Seja Bem Vindo!</Form>
      <button onClick={test}>OPADJDJSDJSNJDNSJ</button>
    </>
  );
};
