import React from "react";

const Navigation = () => {
  return (
    <div className="border-[1px] border-[#e7e7e7] flex justify-start pl-20 py-3">
      <div className="w-auto cursor-pointer">
        <h1 className=" font-semibold text-[#dc4a2d] text-l">Job Preview</h1>
        <hr className="border-[#dc4a2d] w-12 border-[1px] absolute mt-[9px] m-4"></hr>
      </div>

      <h1 className="font-medium text-[#888888] ml-12 cursor-pointer">
        Applicants
      </h1>
      <h1 className="font-medium text-[#888888] ml-12 cursor-pointer">Match</h1>
      <h1 className="font-medium text-[#888888] ml-12 cursor-pointer">
        Messages
      </h1>
    </div>
  );
};

export default Navigation;
