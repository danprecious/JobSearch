import Card from "@/components/cards";
import { GetPost } from "@/utils/apiCall";
import React from "react";
import { jobs } from "@/utils/dataModel";
import Filters from "@/components/Filters";
import { FaBookmark } from "react-icons/fa";
import { Toast } from "@/components/modals/BookMarkToast";

const JobsListing = async () => {

  // perform fetch to jobs api here

  return (
    <div className="w-[100%] relative bottom-0 backdrop-blur-2xl  mt-28 md:mt-16 md:py-[1.5em] md:px-[3em] md:flex ">
      <div className="absolute right-[40em] top-0 z-5 w-[500px] h-[500px] dark:h-[20%] dark:w-[20%] rounded-full blur-[12em] bg-red-50 dark:bg-red-900"></div>
      <div className="absolute left-[20em] bottom-20 z-5 w-[500px] h-[500px] dark:h-[30%] dark:w-[20%] rounded-full blur-[12em] bg-red-50 dark:bg-red-900"></div>
      <div className="absolute right-0 z-5 top-0 w-[500px] h-[500px] dark:h-[20%] dark:w-[20%] rounded-full blur-[10em] bg-green-50 dark:bg-green-900"></div>
      <div className="absolute right-[0em] rotate-10 z-5 top-[20em] w-[500px] h-[500px] dark:h-[50px] dark:w-[80%] rounded-full blur-[7em] bg-green-50 dark:bg-green-900"></div>


      <div className="w-[100%] rounded-3xl md:py-8 md:px-6 px-3 py-3">
        <div><h1 className="text-[1.25rem] pb-5 text-center md:text-left font-bold">Recommended Jobs</h1></div>
        <Filters />

        <div className="w-[100%] custom-grid z-50 rounded-3xl py-6 dark:bg-black bg-lightB">
          {jobs.map((job) => {
            return <Card key={job.id} job={job} />;
          })}
        </div>
      </div>



    </div>
  );
};

export default JobsListing;
