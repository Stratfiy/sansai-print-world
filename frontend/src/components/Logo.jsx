import React from "react";
import logoImg from "../assets/logo.png";

// Real Sansai Print World logo (from business card)
const Logo = ({ dark = false, className = "" }) => {
  if (dark) {
    // On dark backgrounds, place the logo on a clean white chip so all colors stay visible
    return (
      <span className={`inline-flex items-center rounded-xl bg-white px-3 py-2 ${className}`}>
        <img src={logoImg} alt="Sansai Print World" className="h-11 w-auto object-contain" />
      </span>
    );
  }
  return (
    <img src={logoImg} alt="Sansai Print World" className={`h-12 w-auto object-contain ${className}`} />
  );
};

export default Logo;
