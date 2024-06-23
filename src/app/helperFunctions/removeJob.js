import { getJobs } from "./saveJobs";

export const removeJob = (jobId) => {
  const { jobs } = getJobs();

  if (jobs == null) {
    localStorage.removeItem("jobsSaved");
  }

  console.log(jobs.length);
  let filteredJobs = JSON.stringify(jobs.filter((item) => item.id !== jobId));
  localStorage.setItem("jobsSaved", filteredJobs);
};
