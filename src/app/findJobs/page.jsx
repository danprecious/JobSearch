import Filters from "@/components/Filters";
import JobDetails from "@/components/JobDetails";
import JobsListing from "@/components/JobListing";
import React from "react";

const FindJobs = () => {
  return (
    <div>
      <div className="relative w-[100%] md:py-[1.5em] md:px-[3em] md:flex">
        <div className="md:w-[20%]">
          <Filters />
        </div>

        <div className="md:w-[80%] md:flex">
          <JobsListing />
          <div className="hidden md:flex md:w-[50%]"><JobDetails /></div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
