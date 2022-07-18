import React from "react"
import {render} from "@testing-library/react"
import { RegisterForm } from "../components/RegisterForm"

describe("Test Register Form", () => {
    test("Render Register", () => {
        render(<RegisterForm/>)
    })
})