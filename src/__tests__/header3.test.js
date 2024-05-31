import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

describe("Link rendering with Text Weather and App", () => {
  test('renders Link component with text "Weather" and "App"', () => {
    const { getByText } = render(<Header />);

    expect(getByText("Weather")).toBeInTheDocument();

    expect(getByText("App")).toBeInTheDocument();
  });
});
