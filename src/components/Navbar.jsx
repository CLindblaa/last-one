import React from "react";
import Link from "next/link";

export function Navbar({ onModalButtonClick }) {
  return (
    <div className="bg-gray-900 flex items-center justify-between px-10 py-4 shadow-md font-sans">
      <div className="flex items-center">
        <button
          onClick={onModalButtonClick}
          className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-gray-300 focus:outline-none"
        >
          Senaste sökningarna
        </button>
      </div>
    </div>
  );
}
