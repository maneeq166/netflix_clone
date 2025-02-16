import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";

function Home() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* Background Image */}
      <img src={hero_banner} alt="" className="w-full h-screen object-cover" />

      {/* Overlaying Title & Text */}
      <div className="absolute top-1/4 left-10 md:left-20 max-w-lg z-10">
        <img src={hero_title} alt="" className="max-w-full h-auto" />
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>
      </div>
    </div>
  );
}

export default Home;
