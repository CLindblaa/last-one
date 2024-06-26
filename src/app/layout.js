import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Providers from "./Providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Väderappen",
  description: "Generated by Open Weather Map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
