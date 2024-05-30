"use client";

import React, { useEffect } from "react";
import { useSearches } from "@/app/contexts/searchesContext";

const Searches = () => {
  const { recentSearches, addSearch } = useSearches();

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      const parsedSearches = JSON.parse(storedSearches);
      parsedSearches.forEach((search) => {
        if (!recentSearches.includes(search)) {
          addSearch(search);
        }
      });
    }
  }, [recentSearches, addSearch]);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Senaste sökningarna:</h3>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>{capitalizeFirstLetter(search)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searches;
