import React from "react";
import {render, screen} from "@testing-library/react"
import Login from "../pages/login";

describe("Login Page Test", () => {
    test("Render Page", () => {
        render(<Login/>)
    })
})