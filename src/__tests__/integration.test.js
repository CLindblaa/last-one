import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItem from "@/components/MenuItem";
import Header from "@/components/Header";
import RandomContent from "@/components/RandomContent";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { capitalizeFirstLetter } from "@/components/WeatherComponent";

jest.mock("@/components/DarkModeSwitch", () => () => (
  <div data-testid="dark-mode-switch" />
));

describe("All Components", () => {
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

  describe("RandomContent component", () => {
    test("renders random fact", () => {
      const { getByText } = render(<RandomContent />);
      const randomFactElements = [
        "Jorden är inte en perfekt sfär.",
        "Honungsbin kan känna igen människors ansikten.",
        "En struts öga är större än dess hjärna.",
        "Bläckfiskar har tre hjärtan.",
        "Bananer är bär, men jordgubbar är det inte.",
      ];

      const randomFactElement = getByText((content, node) => {
        return randomFactElements.includes(content);
      });

      expect(randomFactElement).toBeInTheDocument();
    });

    test("renders random number", () => {
      const { getByText } = render(<RandomContent />);
      expect(getByText(/Här är ett slumpmässigt tal: \d+/)).toBeInTheDocument();
    });
  });

  describe("DarkModeSwitch component", () => {
    test("onClick changes theme", () => {
      const { getByTestId, debug } = render(<DarkModeSwitch />);
      debug();
      const lightModeIcon = getByTestId("light-mode-icon");
      fireEvent.click(lightModeIcon);
      expect(mockSetTheme).toHaveBeenCalledWith("light");
    });
  });

  describe("capitalizeFirstLetter function", () => {
    it("capitalizes the first letter of a string", () => {
      const input = "weather";
      const output = capitalizeFirstLetter(input);
      expect(output).toBe("Weather");
    });

    it("returns an empty string if the input is an empty string", () => {
      const input = "";
      const output = capitalizeFirstLetter(input);
      expect(output).toBe("");
    });

    it("does not change the case of the rest of the string", () => {
      const input = "wEATHER";
      const output = capitalizeFirstLetter(input);
      expect(output).toBe("WEATHER");
    });
  });
});
