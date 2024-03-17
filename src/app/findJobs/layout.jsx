import Filters from "@/components/Filters";
import React from "react";
import JobsListing from "./Jobs/page";
import { JobDetailDisplay } from "./Jobs/[jobdetail]/page";

const FindJobs = () => {
  return (
      <div className=" w-[100%] mt-28 md:mt-16 md:py-[1.5em] md:px-[3em] md:flex">
        <div className="md:w-[20%]">
          <Filters />
        </div>
        <div className="`md:w-[80%] md:flex relative ">
          <JobsListing />
          <JobDetailDisplay />
        </div>
      </div>
  
  );
};

export default FindJobs;
