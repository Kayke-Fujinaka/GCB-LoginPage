import React from "react";
import { fireEvent, render } from "@testing-library/react";
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

  test("Modal Close 2", async () => {
    const { container } = render(<Modal setOpenModal={jest.fn} />);
    const modalClose2 = container.querySelector("#buttonTop");
    fireEvent.click(modalClose2)
    expect(modalClose2).toBeInTheDocument();
  });
});