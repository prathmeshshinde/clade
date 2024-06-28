import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as User } from "../../assets/users.svg";
import { ReactComponent as Match } from "../../assets/match.svg";
import { ReactComponent as Message } from "../../assets/message-new.svg";
import { ReactComponent as View } from "../../assets/view.svg";

const JobInfo = () => {
  return (
    <div className="border-[#E7E7E7] border-t-[1px] border-l-[1px] min-h-full shadow-[0px_2px_2px_0px_#00000040] p-6">
      <div className="flex">
        <button className="flex flex-1 justify-center items-center border-[#DC4A2D] border-[0.8px] rounded-lg py-2 px-5 m-1">
          <DeleteIcon width="20px" height="20px" />
          <p className="ml-3 text-[#DC4A2D] font-medium text-[16px]">
            Delete job
          </p>
        </button>
        <button className="flex flex-1 justify-center items-center border-[#FED3CA] border-[2px] bg-[#DC4A2D] rounded-lg py-2 px-5 m-1">
          <EditIcon />
          <p className="ml-3 text-[#FFFFFF] font-medium text-[16px]">
            Edit job
          </p>
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center py-6 px-2">
          <div className="flex items-center">
            <User width="20px" height="20px" />
            <p className="text-[#4F4F4F] font-medium text-[16px] ml-2">
              Applicants
            </p>
          </div>
          <h1 className="text-[#3D3D3D] font-semibold text-[20px]">400</h1>
        </div>
        <hr className="border-[#e7e7e7] border-[1px]" />
        <div className="flex justify-between items-center py-6 px-2">
          <div className="flex items-center">
            <Match width="20px" height="20px" />
            <p className="text-[#4F4F4F] font-medium text-[16px] ml-2">
              Matches
            </p>
          </div>
          <h1 className="text-[#3D3D3D] font-semibold text-[20px]">100</h1>
        </div>
        <hr className="border-[#e7e7e7] border-[1px]" />
        <div className="flex justify-between items-center py-6 px-2">
          <div className="flex items-center">
            <Message width="20px" height="20px" />
            <p className="text-[#4F4F4F] font-medium text-[16px] ml-2">
              Messages
            </p>
          </div>
          <h1 className="text-[#3D3D3D] font-semibold text-[20px]">147</h1>
        </div>
        <hr className="border-[#e7e7e7] border-[1px]" />
        <div className="flex justify-between items-center py-6 px-2">
          <div className="flex items-center">
            <View width="20px" height="20px" />
            <p className="text-[#4F4F4F] font-medium text-[16px] ml-2">Views</p>
          </div>
          <h1 className="text-[#3D3D3D] font-semibold text-[20px]">800</h1>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
