import React from "react";

const Card = ({ setActiveCard, activeCard, number, header, content }) => {
  return (
    <div
      onClick={() => setActiveCard(number)}
      className={`p-4 ${
        number === activeCard
          ? "bg-white text-black font-semibold"
          : "bg-white bg-opacity-10 text-white"
      } cursor-pointer `}
    >
      <div className="flex justify-between">
        <p className=" text-4xl mb-4 font-bold uppercase">{header}</p>
        <p className="text-4xl w-full text-end font-semibold">0{number}</p>
      </div>
      <p className="opacity-65">{content}</p>
    </div>
  );
};

export default Card;
