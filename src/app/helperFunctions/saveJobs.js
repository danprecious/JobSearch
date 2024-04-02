"use client"

import React from "react";

import { useContext } from "react"
import { StateContext } from "../stateManager/context"


export const saveJobs =  (job, setJobs, jobs) =>{
    
    
    
    
    const savedJobs =  [...jobs]
    savedJobs.push(job)
    console.log(savedJobs)
    const jobsData = JSON.stringify(savedJobs);
    cacheJobs(savedJobs)

    setJobs((prev) => {
        let updatedJobs;
        if (prev){
            updatedJobs = [...jobs, job]
        }
        else{
            updatedJobs= [job]
        }
        return updatedJobs
    });
    
    console.log(jobs)

}

export const cacheJobs = (savedJobs) =>{
    localStorage.setItem("jobsSaved", saveJobs);
    
}