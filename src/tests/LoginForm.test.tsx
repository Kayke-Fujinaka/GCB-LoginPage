import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm";
import { toast } from "react-toastify";

const mockRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("Test Login Form", () => {
  beforeAll(() => {
    Object.defineProperty(window, "sessionStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
        removeItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  test("Button submit", () => {
    const { getByText } = render(<LoginForm />);
    const button = getByText("Entrar");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  test("Input change", () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    const passwordInput = getByPlaceholderText("Email");
    const emailInput = getByPlaceholderText("Senha");

    fireEvent.change(emailInput, {
      target: { value: "kaykefuji@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });
    expect(emailInput).toHaveValue("kaykefuji@gmail.com");
    expect(passwordInput).toHaveValue("1414Fg!1");
  });

  test("No filled Fill", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");
    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });

    const button = getByText("Entrar");
    fireEvent.click(button);

    waitFor(() => {
      expect(getByText("Preencha com um")).toBeInTheDocument();
    });
  });

  test("Login Test Invalid", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const user = {
      email: "kaykealvesfujinaka@gmail.com",
      password: "1414Fg!1",
    };
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");

    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });

    const button = getByText("Entrar");
    fireEvent.click(button);

    const spy = jest.spyOn(Storage.prototype, "setItem");

    waitFor(() => {
      expect(spy).not.toHaveBeenCalledWith("email", user.email);
    });
  });

  test("Login Test Join", async () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
      switch (key) {
        case "usersList":
          return JSON.stringify([
            {
              email: "kaykealvesfujinaka@gmail.com",
              password: window.btoa("1414Fg!1"),
            },
          ]);
        default:
          return null;
      }
    });
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const user = {
      email: "kaykealvesfujinaka@gmail.com",
      password: "1414Fg!1",
    };
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");

    fireEvent.change(emailInput, {
      target: { value: "kaykealvesfujinaka@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });

    const button = getByText("Entrar");
    fireEvent.click(button);

    const spy = jest.spyOn(Storage.prototype, "setItem");

    waitFor(() => {
      expect(spy).toHaveBeenCalledWith("email", user.email);
    });
  });

  test("Login Test Join", async () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
      switch (key) {
        case "usersList":
          return JSON.stringify([
            {
              email: "kaykealvesfujinaka@gmail.com",
              password: window.btoa("1414Fg!1"),
            },
          ]);
        default:
          return null;
      }
    });
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const user = {
      email: "kaykealvesfujinaka@gmail.com",
      password: "1414Fg!1",
    };
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");

    fireEvent.change(emailInput, {
      target: { value: "kaykefujinaka@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "1414Fg!1" },
    });

    const button = getByText("Entrar");
    fireEvent.click(button);

    expect(emailInput).not.toHaveValue(user.email);
    expect(passwordInput).toHaveValue(user.password);
  })
  
  test("Eye Password Insivible", async () => {
    const { getByTestId, getByPlaceholderText } = render(<LoginForm />);
    const buttonEyeInvisible = getByTestId("buttonEyeInvisiblePassword");
    fireEvent.click(buttonEyeInvisible);

    const inputPassword = getByPlaceholderText("Senha");
    await waitFor(() => {
      expect(inputPassword).toHaveAttribute("type", "text");
    });
  });

  test("Eye Password visible", async () => {
    const { getByTestId, getByPlaceholderText } = render(<LoginForm />);
    const buttonEyeInvisible = getByTestId("buttonEyeInvisiblePassword");
    fireEvent.click(buttonEyeInvisible);
    const buttonEyeVisiblePassword = getByTestId("buttonEyeVisiblePassword");
    fireEvent.click(buttonEyeVisiblePassword);

    const inputPassword = getByPlaceholderText("Senha");
    expect(inputPassword).toHaveAttribute("type", "password");
  });
});
