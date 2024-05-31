import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

describe("Header Component Rendering Link with Text Weather and App", () => {
  test('renders Link component with text "Weather" and "App"', () => {
    const { getByText } = render(<Header />);

    expect(getByText("Weather")).toBeInTheDocument();

    expect(getByText("App")).toBeInTheDocument();
  });
});
