import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DarkModeSwitch from "@/components/DarkModeSwitch";

const mockSetTheme = jest.fn();
jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    setTheme: mockSetTheme,
    systemTheme: "dark",
  }),
}));

describe("DarkModeSwitch component", () => {
  test("onClick changes theme", () => {
    const { getByTestId, debug } = render(<DarkModeSwitch />);
    debug();
    const lightModeIcon = getByTestId("light-mode-icon");
    fireEvent.click(lightModeIcon);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
