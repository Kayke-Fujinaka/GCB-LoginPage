import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { RegisterForm } from "../components/RegisterForm";
import exp from "constants";

const mockRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

jest.mock("react-toastify", () => {
  const React = require("react");
  const actual = jest.requireActual("react-toastify");
  Object.assign(actual, {
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
    ToastContainer: jest.fn(() => <div />),
  });
  return actual;
});

global.alert = jest.fn();

describe("Test Register Form", () => {
  test("Button submit", () => {
    const { getByText } = render(<RegisterForm />);
    const button = getByText("Cadastrar");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  test("Input change", () => {
    const { getByPlaceholderText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");

    fireEvent.change(nameInput, {
      target: { value: "Kayke Fujinaka" },
    });
    fireEvent.change(emailInput, {
      target: { value: "kaykefuji@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });
    expect(nameInput).toHaveValue("Kayke Fujinaka");
    expect(emailInput).toHaveValue("kaykefuji@gmail.com");
    expect(passwordInput).toHaveValue("1414Fg!1");
  });

  test("Eye Password Insivible", async () => {
    const { getByTestId, getByPlaceholderText } = render(<RegisterForm />);
    const buttonEyeInvisible = getByTestId("buttonEyeInvisiblePassword");
    fireEvent.click(buttonEyeInvisible);

    const inputPassword = getByPlaceholderText("Senha");
    await waitFor(() => {
      expect(inputPassword).toHaveAttribute("type", "text");
    });
  });

  test("Eye Password visible", async () => {
    const { getByTestId, getByPlaceholderText } = render(<RegisterForm />);
    const buttonEyeInvisible = getByTestId("buttonEyeInvisiblePassword");
    fireEvent.click(buttonEyeInvisible);
    const buttonEyeVisiblePassword = getByTestId("buttonEyeVisiblePassword");
    fireEvent.click(buttonEyeVisiblePassword);

    const inputPassword = getByPlaceholderText("Senha");
    expect(inputPassword).toHaveAttribute("type", "password");
  });

  test("Filled Fill Name", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Preencha o campo de")).toBeInTheDocument();
    });
  });

  test("Filled Fill Email", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Preencha o campo de email")).toBeInTheDocument();
    });
  });

  test("Email Invalid", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "abog@" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Insira um email válido")).toBeInTheDocument();
    });
  });

  test("Email exists", async () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementationOnce((key) => {
      switch (key) {
        case "usersList":
          return JSON.stringify([
            {
              name: "Kayke Fujinaka",
              email: "kay@gmail.com",
              password: window.btoa("1414Fg!1"),
            },
            {
              name: "Kayke Alves",
              email: "kayke@gmail.com",
              password: window.btoa("1414Fg!1"),
            },
          ]);
        default:
          return null;
      }
    });
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "Kayke Fujinaka" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "kay@gmail.com" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Usuário já existe!")).toBeInTheDocument();
    });
  });

  test("Filled Fill Password", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const passwordInput = getByPlaceholderText("Senha");
    fireEvent.change(passwordInput, {
      target: { value: "" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Preencha o campo de")).toBeInTheDocument();
    });
  });

  test("Password Invalid", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const passwordInput = getByPlaceholderText("Senha");
    fireEvent.change(passwordInput, {
      target: { value: "12" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(
        getByText("A senha deve conter pelo menos um caractere especial")
      ).toBeInTheDocument();
    });
  });

  test("Testing by filling in the checkbox", async () => {
    const { getByRole } = render(<RegisterForm />);
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("No filling in the checkbox", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />);
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const passwordInput = getByPlaceholderText("Senha");
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Aceite os termos de uso!")).toBeInTheDocument();
    });
  });

  test("Register Join", async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <RegisterForm />
    );
    const nameInput = getByPlaceholderText("Nome");
    fireEvent.change(nameInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const passwordInput = getByPlaceholderText("Senha");
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });

    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);

    const button = getByText("Cadastrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Usuário cadastrado com sucesso")).toBeInTheDocument();
    });
  });
});
