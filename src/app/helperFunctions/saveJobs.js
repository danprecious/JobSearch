"use client"

import React, { useReducer } from "react";

import { useContext } from "react"
import { StateContext } from "../stateManager/context"


export const saveJobs = (job) => {


    let savedJobs = [];

    try {
        const {jobs} = getJobs()
        if (jobs == null || undefined) {
            savedJobs.push(job)
            const jobsData = JSON.stringify(savedJobs);
            cacheJobs(jobsData)
            console.log("this happened");
            // console.log(jobsData)
        }

        else {
            // console.log(jobs)
            savedJobs = [...jobs]
            let exists = savedJobs.some(jobObject => jobObject.id == job.id)

            if (exists) {
                console.log("job exists")
                console.log(found)
                // console.log(savedJobs.length)
                // return;

            }
            if (!exists) {
                console.log("this happened instead")
                savedJobs = [...jobs]
                savedJobs.push(job)
                const jobsData = JSON.stringify(savedJobs);
                cacheJobs(jobsData)
            }
        }

    }
    catch {
        const err = console.error("No jobs");
        return err;
    }

}

export const cacheJobs = (jobsData) => {
    localStorage.setItem("jobsSaved", jobsData);
    const saved = JSON.parse(localStorage.getItem("jobsSaved"));
    // console.log(saved);
}

export const getJobs = () => {
    const jobs = JSON.parse(localStorage.getItem("jobsSaved"));
    return {
        jobs
    }
}