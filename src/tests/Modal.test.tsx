import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "../components/Modal";

describe("Test Modal", () => {
  test("Modal Close", async () => {
    const { getByRole } = render(<Modal setOpenModal={jest.fn} />);
    const modalClose = getByRole("button", {
      name: /continuar/i,
    });
    fireEvent.click(modalClose);
    expect(modalClose).toBeInTheDocument();
  });
});
