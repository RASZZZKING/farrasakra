import React from "react";

const MarqueCard = ({
  imageUrl,
  altImage,
  title,
  isMain,
  description,
  badge,
}) => {
  return (
    <li className={`card max-w-96 ${isMain ? " text-black" : "text-white  bg-opacity-10"}  bg-white  shadow-xl`}>
      <div className="card-body ">
        <h2 className="card-title">
          {title}
          {isMain && <div className="badge badge-secondary">MAIN</div>}
        </h2>
        <p className="text-wrap">{description}</p>
        <div className="card-actions justify-end">
          {badge.map((cb, index) => (
            <div key={index} className="badge badge-outline">
              {cb}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default MarqueCard;
