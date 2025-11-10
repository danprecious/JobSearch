import Card from "@/components/cards";
import { GetPost, fetchJobs, fetchJobs2, getJobs } from "@/utils/apiCall";
import React from "react";
import { jobs } from "@/utils/dataModel";
import Filters from "@/components/Filters";
import { FaArrowDown, FaBookmark } from "react-icons/fa";

const FindJobs = async () => {
  // perform fetch to jobs api here

  // const query = {
  //   q: "software engineer",
  //   page: "1",
  //   country: "us",
  //   city: "Seattle",
  // }

  // const data = await getJobs(query);
  // console.log((data));

  return (
    <div className="w-[100%] relative bottom-0 backdrop-blur-2xl  md:py-[1.5em] md:px-[3em]  ">
      <div className="h-[0vh flex justify-center items-center flex-col p-4">
        <h1 className="md:text-[6rem] text-[3rem] font-bold md:w-[80%] text-center text-secondary z-40">
          Find Jobs For You, Easily
        </h1>
        <p className="text-center my-4">
          JOObs gets you one step closer to your dream job
        </p>
        <p className="flex items-center md:mt-2 mt-8 border rounded-md px-4 py-3">
          See some for you <FaArrowDown className="ml-2" />
        </p>
      </div>  

      <div className="hidde">
        <div className="absolute right-0 bottom-0 z-5 md:w-[500px] w-[150px] md:h-[200px] h-[100px]  rounded-full blur-[12em] bg:radial1 "></div>
        <div className="absolute left-0 bottom-20 z-5 md:w-[500px] w-[150px] h-[250px] md:h-[500px] rounded-full blur-[12em] bg-radial-2 "></div>
        <div className="absolute right-0 z-5 top-20 md:w-[300px] h-[500px] w-[500px]   md:h-[500px]  rounded-full blur-[10em] bg-radial-4 "></div>
        <div className="absolute left-0 z-5 top-20 md:w-[300px] w-[300px] md:h-[500px]   h-[300px] rounded-full blur-[7em] bg-radial-2 "></div>
      </div>

      <div className="w-[100%] rounded-3xl md:py-8 md:px-6 px-3 py-3">
        <div>
          <h1 className="text-[1.25rem] pb-5 text-center md:text-left font-bold">
            Jobs
          </h1>
        </div>
        <Filters />

        <div className="w-[100%] custom-grid z-50 rounded-3xl py-6">
          {jobs.map((job) => {
            return <Card key={job.id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
