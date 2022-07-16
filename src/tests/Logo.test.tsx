import React from "react";
import { render, screen } from "@testing-library/react";
import { Logo } from "../components/Logo";

describe("Test Logo", () => {
  test("Test Logo Apperece", async () => {
    render(
      <Logo
        src={"/logo-desktop.svg"}
        alt="GCB Logo Desktop"
        width={325}
        height={120}
      />
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt", "GCB Logo Desktop");
  });
});
