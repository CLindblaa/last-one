import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

describe("Header component", () => {
  test("renders MenuItems", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Startsida")).toBeInTheDocument();
    expect(getByText("Väder")).toBeInTheDocument();
    expect(getByText("Om oss")).toBeInTheDocument();
    expect(getByText("Senaste sökningarna")).toBeInTheDocument();
  });
});
