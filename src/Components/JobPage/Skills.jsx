import React from "react";
import Figma from "../../assets/figma.png";
import Ai from "../../assets/ai.png";
import Xd from "../../assets/xd.png";

const Skills = () => {
  return (
    <div className="pl-20 py-[32px] flex flex-wrap">
      <div className="w-full md:w-1/5 sm:1/2">
        <p className="text-[#6e6d6d] font-medium text-[14px]">
          Skills Required
        </p>
        <ul>
          <li className="flex border-[#d0d5dd] border-[1px] w-fit px-2 py-1 rounded-md my-2">
            <img src={Figma} alt="figma" className="w-4 mr-1" />
            <p className="text-[#344054] font-medium text-[12px]">Figma</p>
          </li>
          <li className="flex border-[#d0d5dd] border-[1px] w-fit px-2 py-1 rounded-md my-2">
            <img src={Ai} alt="AI" className="w-4 mr-1" />
            <p className="text-[#344054] font-medium text-[12px]">
              Adobe Illustrator
            </p>
          </li>
          <li className="flex border-[#d0d5dd] border-[1px] w-fit px-2 py-1 rounded-md my-2">
            <img src={Xd} alt="XD" className="w-4 mr-1" />
            <p className="text-[#344054] font-medium text-[12px]">Adobe XD</p>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 sm:1/2">
        <p className="text-[#6e6d6d] font-medium text-[14px]">
          Preferred Language
        </p>
        <h1 className="text-[#3D3D3D] text-[16px] font-semibold mt-2">
          English
        </h1>
      </div>
      <div className="w-full md:w-1/5 sm:1/2">
        <p className="text-[#6e6d6d] font-medium text-[14px]">Type</p>
        <h1 className="text-[#3D3D3D] text-[16px] font-semibold mt-2">
          Full time
        </h1>
      </div>
      <div className="w-full md:w-1/5 sm:1/2">
        <p className="text-[#6e6d6d] font-medium text-[14px]">
          Years of Experience
        </p>
        <h1 className="text-[#3D3D3D] text-[16px] font-semibold mt-2">
          3+ Years of Experience
        </h1>
      </div>
    </div>
  );
};

export default Skills;
