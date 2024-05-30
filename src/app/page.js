import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-5">
      <h2 className="font-bold text-lg py-2">Hej och välkommen till Väderappen!</h2>
      <p>
        Gå till <Link href={"/weather"} className="font-bold hover:text-amber-500">Väder</Link> för att se vädret i din stad.
      </p>
    </div>
  );
}
