import { fireEvent, render, screen } from "@testing-library/react"

import { LoginForm } from "@mbl-modules/auth/components/login"

describe("Login Component", () => {
  it("renders an input field for an email", () => {
    render(<LoginForm />)
    const inputField = screen.getByTestId("login-email")

    expect(inputField).toBeVisible()
  })

  it("renders an input field for password", () => {
    render(<LoginForm />)
    const inputField = screen.getByTestId("login-password")

    expect(inputField).toBeVisible()
  })

  it("handles input change for an email", () => {
    render(<LoginForm />)

    const inputField = screen.getByTestId("login-email")

    fireEvent.change(inputField, { target: { value: "jim@test.com" } })

    expect(inputField).toHaveValue("jim@test.com")
  })

  it("handles input change for a password", () => {
    render(<LoginForm />)

    const inputField = screen.getByTestId("login-password")

    fireEvent.change(inputField, { target: { value: "Passkey123" } })

    expect(inputField).toHaveValue("Passkey123")
  })

  it("renders a login button and handles click event", () => {
    render(<LoginForm />)

    const loginButton = screen.getByTestId("login-btn")

    expect(loginButton).toBeInTheDocument()

    fireEvent.click(loginButton)

    expect(loginButton).toBeDisabled()
  })
})
