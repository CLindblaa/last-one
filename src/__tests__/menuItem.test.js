import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItem from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";

describe("MenuItem component", () => {
  test("renders link with correct address and title", () => {
    const { getByText, getByRole } = render(
      <MenuItem title="Startsida" address="/" Icon={AiFillHome} />
    );

    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/");

    const titleElement = getByText("Startsida");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders icon correctly", () => {
    const { container } = render(
      <MenuItem title="Startsida" address="/" Icon={AiFillHome} />
    );

    const iconElement = container.querySelector("svg");
    expect(iconElement).toBeInTheDocument();
  });
});
