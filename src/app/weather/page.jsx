"use client"
import React, { useState } from "react";
import Search from "@/components/Search";
import WeatherComponent from "@/components/WeatherComponent";

export default function Weather() {
  const [city, setCity] = useState("");

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <>
      <Search onSubmit={handleSearch} />
      <WeatherComponent city={city} />
    </>
  );
}
