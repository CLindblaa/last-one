import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomContent from "./../components/RandomContent";

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
