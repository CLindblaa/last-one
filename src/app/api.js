import axios from "axios";

const apiKey = "848e9cb3bc8f810b8682c4d08a0f8687";

export const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Kunde inte hämta väderdata");
  }
};
