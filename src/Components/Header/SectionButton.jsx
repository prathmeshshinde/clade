import React from "react";
import { ReactComponent as Briefcase } from "../../assets/briefcase.svg";
import { ReactComponent as Message } from "../../assets/message.svg";
import { ReactComponent as Coins } from "../../assets/coins.svg";

const SectionButton = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="bg-[#dc4a2d] items-center border-2 border-[#fcb4a5] flex justify-evenly p-2 rounded-full w-auto cursor-pointer">
        <Briefcase />
        <h4 className="text-white font-medium ml-2 mr-1">Jobs</h4>
      </div>
      <div className="bg-white flex items-center justify-evenly p-2 rounded-full w-auto cursor-pointer">
        <Message />
        <h4 className="text-[#b0b0b0] font-medium ml-2 mr-1">Messages</h4>
      </div>
      <div className="bg-white flex items-center justify-evenly p-2 rounded-full w-auto cursor-pointer">
        <Coins />
        <h4 className="text-[#b0b0b0] font-medium ml-2 mr-1">Payments</h4>
      </div>
    </div>
  );
};

export default SectionButton;
