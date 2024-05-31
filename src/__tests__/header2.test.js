import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

jest.mock("@/components/DarkModeSwitch", () => () => (
  <div data-testid="dark-mode-switch" />
));

describe("Header component", () => {
  test("renders DarkModeSwitch component", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("dark-mode-switch")).toBeInTheDocument();
  });
});
