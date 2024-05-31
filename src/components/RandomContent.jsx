import React from "react";

const RandomContent = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomFacts = [
    "Jorden är inte en perfekt sfär.",
    "Honungsbin kan känna igen människors ansikten.",
    "En struts öga är större än dess hjärna.",
    "Bläckfiskar har tre hjärtan.",
    "Bananer är bär, men jordgubbar är det inte.",
  ];

  const randomFact =
    randomFacts[Math.floor(Math.random() * randomFacts.length)];

  return (
    <div className="mt-[8rem] border-2 border-gray-300 p-4 rounded shadow-md text-center text-amber-500">
      <h2 className="text-xl font-bold mb-4">Slumpmässigt Innehåll</h2>
      <p className="mb-2 text-sm text-pink-500">
        Här är ett slumpmässigt tal: {getRandomNumber()}
      </p>
      <p className="text-sm font-bold text-pink-400">{randomFact}</p>
    </div>
  );
};

export default RandomContent;
