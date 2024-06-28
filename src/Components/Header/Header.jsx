import React from "react";
import Logo from "./Logo";
import SectionButton from "./SectionButton";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-between m-[10px]">
      <div className="p-2">
        <Logo />
      </div>
      <div className="border-[0.5px] border-[#d1d1d1] w-[27%] p-2 rounded-full">
        <SectionButton />
      </div>
      <div className="p-2">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
