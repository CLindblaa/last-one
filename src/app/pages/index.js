import React, { useState, useEffect } from "react";
import { metadata } from "./layout"; // Importera metadata från layout.js
import Search from "@/components/Search";
import Weather from "@/components/WeatherComponent";
import RecentSearchesList from "@/components/RecentSearchesList";
import ModalRecentSearch from "@/components/ModalRecentSearch";
import Error from "@/components/Error";
import { fetchWeatherData } from "@/app/api";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const data = await fetchWeatherData(city);
          setWeatherData(data);
          setError(null);
        }
      } catch (error) {
        setError("Error fetching weather data");
        console.log("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <>
      <metadata {...metadata} /> {/* Använd metadata från layout.js */}
      <Search onSubmit={handleSearch} />
      <div className="mt-20 text-center flex-grow">
        {weatherData && <Weather weatherData={weatherData} />}
        {error && <Error message={error} />}
      </div>
      <RecentSearchesList />
      <ModalRecentSearch
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
