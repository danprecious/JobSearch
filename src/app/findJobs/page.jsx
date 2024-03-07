import Filters from "@/components/Filters";
import JobDetails from "@/components/JobDetails";
import JobsListing from "@/components/JobListing";
import React from "react";

const FindJobs = () => {
  return (
    <div>
      <div className="relative w-[100%] md:py-[1.5em] md:px-[3em] md:flex">
        <div className="w-[20%]">
          <Filters />
        </div>

        <div className="w-[80%] md:flex">
          <JobsListing />
          <JobDetails />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
