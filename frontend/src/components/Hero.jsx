import React from "react";
import hero1 from "../assets/images/herobg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img src={hero1} alt="" className="w-full h-full object-cover" />
      <div class="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <h1 class="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Our Site
        </h1>
      </div>
    </div>
  );
};

export default Hero;
