import React from "react";
import { ReactComponent as Marker } from "../../assets/marker.svg";
import { ReactComponent as Salary } from "../../assets/salary.svg";

const Job = () => {
  return (
    <div className="pl-20 py-[32px]">
      <div className="flex items-center flex-wrap">
        <h1 className="text-[#3d3d3d] text-[32px] font-semibold">
          Senior Product Designer
        </h1>
        <div className="w-[4px] h-[4px] rounded-full bg-[#d1d1d1] ml-5"></div>
        <div className="ml-5 text-[#888888] font-medium">
          <p>posted 2 days ago</p>
        </div>
        <div className="border-[#abefc6] border-[1px] inline-flex rounded-full px-[06px] bg-[#ecfdf3] ml-8 w-[64px] justify-center items-center py-[2px]">
          <div className="w-[6px] h-[6px] rounded-full bg-[#17b26a] mr-1"></div>
          <h5 className=" text-center p-0 m-0 ml-1 text-[#067647] font-medium text-[12px]">
            Open
          </h5>
        </div>
      </div>
      <div className="flex items-center flex-wrap mt-4">
        <div className="flex items-center">
          <Marker />
          <h2 className="text-[#5d5d5d] text-[20px] font-medium ml-2">
            Delaware, USA
          </h2>
        </div>
        <div className="w-[4px] h-[4px] rounded-full bg-[#d1d1d1] ml-5"></div>
        <div className="flex items-center ml-5">
          <Salary />
          <h2 className="text-[#5d5d5d] text-[20px] font-medium ml-2">
            $300k-$400k
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Job;
