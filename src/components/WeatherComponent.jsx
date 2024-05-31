"use client";

import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "@/app/api";
import Searches from "@/app/searches/page";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const data = await fetchWeatherData(city);
          setWeatherData(data);
          setError(null);
        }
      } catch (error) {
        console.log("Error fetching weather data:", error);
        setError("Error fetching weather data");
      }
    };

    fetchData();
  }, [city]);


  return (
    <div>
      {error && <Error message={error} /> }
      {weatherData && (
        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4">
            Väder för {weatherData.name}
          </h2>
          <div className="text-lg mb-4">
            <p>Temperatur: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>
              Beskrivning:{" "}
              {capitalizeFirstLetter(weatherData.weather[0].description)}
            </p>
          </div>
        </div>
      )}
      <Searches />
    </div>
  );
};

export default Weather;
