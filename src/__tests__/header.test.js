import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

jest.mock("@/components/DarkModeSwitch", () => () => (
  <div data-testid="dark-mode-switch" />
));

describe("Header component", () => {
  test("renders MenuItems", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Startsida")).toBeInTheDocument();
    expect(getByText("Väder")).toBeInTheDocument();
    expect(getByText("Om oss")).toBeInTheDocument();
    expect(getByText("Senaste sökningarna")).toBeInTheDocument();
  });

  test("renders DarkModeSwitch component", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("dark-mode-switch")).toBeInTheDocument();
  });

  test('renders Link component with text "Weather" and "App"', () => {
    const { getByText } = render(<Header />);

    expect(getByText("Weather")).toBeInTheDocument();
    expect(getByText("App")).toBeInTheDocument();
  });
});
