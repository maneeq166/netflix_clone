import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import bellicon from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import caret from "../assets/caret_icon.svg";

function Navbar() {
  return (
  <div className="flex justify-around py-[20px] bg-gradient-to-b from-black/70 via-black/50 to-transparent">
      <div className="flex items-center">
        <img src={logo} alt="" srcset="" className="h-9" />
        <ul className="flex px-6 gap-3 cursor-pointer">
          <li className=" ">Home</li>
          <li className=" ">TV Shows</li>
          <li className=" ">Movies</li>
          <li className=" ">New & Popular</li>
          <li className=" ">My List</li>
          <li className=" ">Browse by languages</li>
        </ul>
      </div>
      <div className="flex gap-3 cursor-pointer items-center">
        <img src={search} alt="" className=" h-6" />
        <p className="">Children</p>
        <img src={bellicon} alt="" className=" h-6 " />
        <div className="flex items-center gap-2 relative group">
          <img src={profile} alt="" className="h-9 rounded" />
          <img src={caret} alt="" />

          {/* Hidden Element - Shown on Hover */}
          <div className="absolute top-full bg-[#191919] rounded p-4 max-w-max underline whitespace-nowrap hidden group-hover:block">
            <p className="mr-1">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
