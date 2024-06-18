import { getJobs } from "./saveJobs"

export const removeJob = (jobId) =>{
   const {jobs} = getJobs()
    let filteredJobs = JSON.stringify(jobs.filter(item => item.id !== jobId))
    localStorage.setItem("jobsSaved", filteredJobs);
}