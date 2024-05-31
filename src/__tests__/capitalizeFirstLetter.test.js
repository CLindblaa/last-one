import { capitalizeFirstLetter } from "@/components/WeatherComponent";

describe("capitalizeFirstLetter", () => {
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
