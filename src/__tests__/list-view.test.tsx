import { fireEvent, render, screen } from "@testing-library/react"

import { ListView } from "@mbl-modules/mail/components/list-view"

describe("ListView Component", () => {
  it("renders an input field", () => {
    render(<ListView />)
    const inputField = screen.getByTestId("search-input")

    expect(inputField).toBeVisible()
  })

  it("handles input change", () => {
    render(<ListView />)

    const inputField = screen.getByTestId("search-input")

    fireEvent.change(inputField, { target: { value: "Birthday" } })

    expect(inputField).toHaveValue("Birthday")
  })
})
