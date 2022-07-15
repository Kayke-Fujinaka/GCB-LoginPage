import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CheckBox } from "../components/CheckBox";

describe("Checkbox Test", () => {
  test("Testing by filling in the checkbox", async () => {
    const { getByRole } = render(
      <CheckBox name="tport" type="checkbox" onChange={jest.fn()} />
    );
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("Testing the modal display of in the checkbox component", async () => {
    const { getByText } = render(
      <CheckBox name="checkbox" type="checkbox" onChange={jest.fn()} />
    );
    const termsText = getByText("Termos de Uso");
    fireEvent.click(termsText);
    expect(getByText("Continuar")).toBeInTheDocument();
  });
});
