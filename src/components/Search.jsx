"use client";

import React, { useState } from "react";
import { useSearches } from "@/app/contexts/searchesContext";

const Search = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  const { addSearch } = useSearches();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
    addSearch(city); 
    setCity("");
  };

  return (
    <div className="bg-gray-800 p-8 text-center font-sans antialiased">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ange en stad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded border border-gray-300 w-72 mr-2"
        />
        <button
          type="submit"
          className="bg-amber-500 text-white p-2 rounded cursor-pointer"
        >
          Sök
        </button>
      </form>
    </div>
  );
};

export default Search;
