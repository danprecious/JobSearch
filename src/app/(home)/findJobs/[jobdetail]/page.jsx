"use client";

import React, { useContext, useState } from "react";
import { jobs } from "@/utils/dataModel";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { document } from "postcss";
import { useParser } from "@/hooks/htmlParser";
import { FaBookmark, FaBookReader, FaWrench } from "react-icons/fa";
import { StateContext } from "@/app/stateManager/context";
import { saveJobs } from "@/app/_helperFunctions/saveJobs";

const JobDetail = () => {
  const { savedjobs, setSavedJobs } = useContext(StateContext);

  const params = useParams();
  const paramsId = decodeURIComponent(params.jobdetail);

  const jobData = jobs.find((job) => job.id === paramsId);

  const {
    company_name,
    title,
    application_url,
    source,
    salary,
    html_description,
    publication_time,
    plain_text_description,
  } = jobData;

  const { updatedContent } = useParser(html_description);

  let salaryType = null;
  if (salary !== null) {
    salaryType = salary.salary_type;
  }

  const useStringer = (text) => {
    let upperCase;
    if (text !== null) {
      upperCase = text.charAt(0).toUpperCase() + text.slice(1);
    }
    return { upperCase };
  };
  const { upperCase } = useStringer(salaryType);

  let currency = "";
  if (salary !== null && salary.currency === "USD") {
    currency = "$";
  }
  // console.log(params)

  //try catch for handling the error when jobData cannot be found
  // console.log(jobData);

  // console.log(salary);

  // console.log(upperCase);

  // const saveJobs = () => {
  //   savedjobs.push(jobData);
  // }

  return (
    <div className="w-[100%] md:min-h-[90vh] py-5 lg:px-[15em] px-4  rounded-3xl mx-2  bg-white/10 bg-opacity-50 backdrop-blur-lg   md:flex flex-col  md:rounded-none rounded-t-[2em]  dark:bg-darkShade md:dark:bg-darkBg ">
      {paramsId ? (
        <div>
          <div className=" bg-primary bg-opacity-70 backdrop-blur-lg p-6 rounded-[1.5em]">
            {/* <p>"..."</p> */}
            <div className="flex flex-col md:flex-row md:justify-between items-center backdrop-blur-lg rounded-[1.5em] p-3">
              <div className="w-[100%] flex flex-col flex-start">
                {" "}
                <div className="flex flex-col py-2 justify-between">
                  <h2 className="text-[1.5rem]  font-bold">{title}</h2>
                  <h2 className=" font-bold">{company_name}</h2>{" "}
                </div>
                <div className="font-bold text-[.75rem] text-green-900">
                  {source}
                </div>
              </div>
              <div className="flex text-right w-[100%]  justify-end flex-col">
                {" "}
                <div className="flex flex-col justify-center">
                  {salaryType ? (
                    <p className="backdrop-blur-lg font-bold text-sm">
                      {upperCase}
                    </p>
                  ) : (
                    <p className="text-[0.85rem] bg-red-500/70 bg-opacity-20 rounded-[1.5em] p-3  text-white">
                      Salary <br /> Unavailable
                    </p>
                  )}
                </div>
                <div>
                  {salaryType ? (
                    <p className="">
                      <span className="text-green-700 font-bold">
                        {currency}
                      </span>
                      {salary.min_salary} -{" "}
                      <span className="text-green-700 font-bold">
                        {currency}
                      </span>
                      {salary.max_salary}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>{" "}
            </div>

            <div className="flex w-100 md:flex-row flex-col items-center my-5 relative">
              <button
                onClick={() => saveJobs(jobData)}
                href={application_url}
                className=" w-[100%] dark bg-stone-800 flex justify-center items-center  mx my-1-1 text-sm rounded-[1.3em] py-3 px-6"
              >
                <FaBookmark />
                <p className="px-2">Save</p>
              </button>

              <Link
                href={application_url}
                className=" w-[100%] bg-stone-800 flex justify-center items-center  my-1 mx-1 text-sm  rounded-[1.3em] py-3 px-6"
              >
                <FaBookReader />
                <p className="px-2">Apply</p>
              </Link>
            </div>
          </div>

          <div className="flex justify-center flex-col dark:bg-black bg-primary bg-opacity-70 backdrop-blur-lg p-6 rounded-[1.5em]  my-5 items-center">
            <div dangerouslySetInnerHTML={{ __html: updatedContent }} />
          </div>
          <div className="flex justify-end p-2"></div>
        </div>
      ) : (
        "hhhh"
      )}
    </div>
  );
};

export default JobDetail;
