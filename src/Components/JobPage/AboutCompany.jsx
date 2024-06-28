import React from "react";
import Company from "../../assets/company.png";

const AboutCompany = () => {
  return (
    <div className="pl-20 py-[32px] flex flex-wrap">
      <div className="flex-1">
        <div className="flex items-center">
          <img src={Company} alt="company" width="40px" height="40px" />
          <h1 className="text-[20px] text-[#4F4F4F] font-medium ml-4">
            Atlassian
          </h1>
        </div>
        <div className="w-full">
          <div className="flex">
            <div className="flex-1">
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Company size
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  1k - 2k Employees
                </p>
              </div>
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Sector
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Founded In
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  2019
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Type
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  Private
                </p>
              </div>
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Funding
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  Bootstrapped
                </p>
              </div>
              <div className="mt-[16px]">
                <p className="text-[#6E6D6D] text-[14px] font-medium mt-[30px]">
                  Founded By
                </p>
                <p className="text-[#3D3D3D] font-medium text-[16px] mt-[8px]">
                  Scott Farquhar, Mike Cannon-Brookes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
