import React from "react";
// import { useRecentSearches } from "../contexts/RecentSearchesContext";

const ModalRecentSearch = ({ isOpen, onClose }) => {
//   const { recentSearches } = useRecentSearches();

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded">
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Senaste sökningarna:</h3>
              <ul className="list-disc pl-4">
                {recentSearches.map((search, index) => (
                  <li key={index} className="py-1 border-b border-gray-300">
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalRecentSearch;
