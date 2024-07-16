import React from "react";

const ImageSlider = ({ setActiveCard, activeCard, number, imageUrl }) => {
  return (
    <div
      onClick={() => setActiveCard(number)}
      className={`p-4 ${
        number === activeCard
          ? "bg-white text-black font-semibold"
          : "bg-white bg-opacity-10 text-white"
      } relative cursor-pointer `}
    >
      <div className="flex relative justify-between max-h-32 object-cover">
        <p className="absolute text-4xl w-full text-end z-10 font-semibold">0{number}</p>
        <img src={imageUrl} alt="" className="object-scale-down grayscale" />
      </div>
    </div>
  );
};

export default ImageSlider;
