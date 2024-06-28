import React from "react";
import Job from "./Job";
import Skills from "./Skills";
import JobDescription from "./JobDescription";
import AboutCompany from "./AboutCompany";

const JobPage = () => {
  return (
    <div>
      <Job />
      <hr className="border-[#e7e7e7] border-[1px]" />
      <Skills />
      <hr className="border-[#e7e7e7] border-[1px]" />
      <JobDescription />
      <hr className="border-[#e7e7e7] border-[1px]" />
      <AboutCompany />
    </div>
  );
};

export default JobPage;
