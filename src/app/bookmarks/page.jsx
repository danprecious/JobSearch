"use client"

import Card from "@/components/cards";
import { useContext, useEffect } from "react";
import { StateContext } from "../stateManager/context";




const Bookmarks = () => {

  const {jobs, setJobs} = useContext(StateContext)

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobsSaved"))
    setJobs

  })


  const cachedJobs = localStorage.getItem("jobsSaved");
  const savedJobs = JSON.parse(cachedJobs)

  return (
    <div className='mt-[8.5em] mx-[3em] min-h-[100vh]'>
      {savedJobs ? <div className="custom-grid">
        {savedJobs.map((job,  index) => {
          return <Card  key={job.id} job={job} />
        })}

      </div> : <div><p>You haven't saved any job yet, Bookmark one and it will appear here </p></div>}
    </div>
  )
}

export default Bookmarks;
