"use client"

import Card from "@/components/cards";
import { useContext, useEffect } from "react";
import { StateContext } from "@/app/stateManager/context";
import { FaStickyNote } from "react-icons/fa";

const Bookmarks = () => {
  const { state, dispatch } = useContext(StateContext);
  const { jobs } = state;

  const savedJobs = false;

  return (
    <div className="mt-[8.5em] mx-[3em] min-h-[100vh]">
      {savedJobs ? (
        <div className="custom-grid">
          {savedJobs.map((job, index) => {
            return <Card key={job.id} job={job} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div>
            <FaStickyNote className="text-[10rem]" />
          </div>
          <div>
            <h1 className="font-black text-[3rem]">Opps...</h1>
          </div>
          <p className="text-black dark:text-stone-200 text-center">
            You haven't saved any job yet, make a bookmark and it will appear
            here{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
