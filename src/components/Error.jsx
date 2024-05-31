import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 p-4 border border-red-400 rounded mt-5">
      <p className="m-0 font-sans">{message}</p>
    </div>
  );
};

export default Error;
