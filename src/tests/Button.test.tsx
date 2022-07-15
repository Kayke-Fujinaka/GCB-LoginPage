import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Checkbox Test", () => {
  test("Testing by filling in the checkbox", async () => {
    const { getByRole } = render(
      <Button type="button" color="#000" bgColor="#FFF">
        Botão
      </Button>
    );
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
