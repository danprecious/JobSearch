"use client"

import Link from "next/link";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { saveJobs } from "@/app/helperFunctions/saveJobs";
import { useContext, useState } from "react";
import { StateContext } from "@/app/stateManager/context";
import { cacheJobs } from "@/app/helperFunctions/saveJobs";


const Card = ({job} ) => {
    const { logo, title, id, company_name, source, salary } = job;


    const { jobs, setJobs } = useContext(StateContext);
    // // const [jobs, setJobs] = useState([]);

    // const saveJobs = (job) => {
        
    //     const updatedJobs = [...jobs]

    //     updatedJobs.push(job)
    //     console.log(updatedJobs)
        
    //     setJobs(updatedJobs);
    //     console.log(jobs)
    // }

    // // const { cachedJobs } = cacheJobs(jobs);


    return (
        <div className="px-4 z-30  min-h-[17em] md:max-h-[15em] shadow bg-white/10 bg-opacity-50 backdrop-blur-lg  md:min-w-[15em] md:max-w-[20em] w-[100%] py-4 justify-between flex  dark:bg-darkBg rounded-lg mb-4">
            <div className=" w-[100%] flex flex-col  justify-between">
                <div className="flex justify-between">
                    <div>Date</div>
                    <button onClick={() => saveJobs(job,setJobs, jobs)} className="text-xs self-end flex items-center justify-between text-white bg-stone-900 p-2 rounded-[1.5em]">
                        <FaBookmark />
                    </button>
                </div>
                <div className="flex justify-between py-4">
                    <div>
                        <p className="text-[10px] font-bold text-green-900  py-2 opacity-80">{source}</p>
                        <h1 className="font-bold text-[1.1rem] py-1">{title}</h1>
                        <p className="text-xs opacity-80">{company_name}</p>
                        {/* <p className="text-xs opacity-80 text-red-500">3 Days ago</p> */}
                    </div>
                </div>
                <div className="text-right flex  justify-between items-center font-extralight">
                    <div>

                    </div>
                    <Link href={`/findJobs/${id}`} className="text-xs  text-white  self-end bg-stone-900 px-3 py-2 rounded-[2em]">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;