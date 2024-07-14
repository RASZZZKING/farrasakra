"use client"
import React from "react";

const Header = ({title, children}) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-5xl font-bold">{title}</p>
      {children}
    </div>
  );
};

export default Header;
