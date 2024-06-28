import React from "react";

const JobDescription = () => {
  return (
    <div className="pl-20 py-[32px] flex flex-wrap">
      <div>
        <p className="text-[#6e6d6d] font-medium text-[14px]">About the job</p>
        <ol className="list-decimal pl-3 font-medium text-[16px]">
          <li className="my-2 text-[#3D3D3D]">
            Handle the UI/UX research design
          </li>
          <li className="my-2 text-[#3D3D3D]">
            Work on researching on latest web applications designs & trends
          </li>
          <li className="my-2 text-[#3D3D3D]">
            Work on conceptualizing and visualizing
          </li>
          <li className="my-2 text-[#3D3D3D]">
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <p className="my-2 font-medium text-[#3D3D3D]">Benefits:</p>
        <ul className="list-disc pl-3 font-medium">
          <li className="my-2 text-[#3D3D3D]">Health insurance</li>
          <li className="my-2 text-[#3D3D3D]">Provident Fund</li>
        </ul>
        <p className="my-2 font-medium text-[#3D3D3D]">Schedule:</p>
        <ul className="list-disc pl-3 font-medium">
          <li className="my-2 text-[#3D3D3D]">Day shift</li>
        </ul>
        <p className="my-2 font-medium text-[#3D3D3D]">
          Supplemental pay types
        </p>
        <ul className="list-disc pl-3 font-medium">
          <li className="my-2 text-[#3D3D3D]">Performance bonus</li>
          <li className="my-2 text-[#3D3D3D]">Yearly bonus</li>
        </ul>
        <p className="my-2 font-medium text-[#3D3D3D]">
          Work Location: In person
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
