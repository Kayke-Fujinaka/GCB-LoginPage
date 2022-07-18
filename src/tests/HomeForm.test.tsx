import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { HomeForm } from "../components/HomeForm";

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe("Test HomeForm", () => {
  test.only("Button", () => {
    const push = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      push,
    }))
    render(<HomeForm name="Kayke" email="kayke@gmail.com" />);
    const buttonLogout = screen.getByText("Logout");
    fireEvent.click(buttonLogout);
    expect(push).toHaveBeenLastCalledWith("/login");
  });
});
