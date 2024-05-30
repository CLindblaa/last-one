"use client";

import { ThemeProvider } from "next-themes";
import { SearchesProvider } from "@/app//contexts/searchesContext";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <SearchesProvider>
        <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
          {children}
        </div>
      </SearchesProvider>
    </ThemeProvider>
  );
}
