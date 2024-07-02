'use client'

import { removeJob } from "@/app/_helperFunctions/removeJob";
import { StateContext } from "@/app/stateManager/context";
import { useContext } from "react";
import { getJobs } from "@/app/_helperFunctions/saveJobs";

export const DeleteBookMark = () => {
  const { state, dispatch } = useContext(StateContext);
  const { bookmarkModal, jobId } = state;

  // console.log(job)
  const handleClick = (value) => {
    
  };

  return (
    <div>
      {bookmarkModal && (
        <div
          className={`fixed w-[100%] h-[100vh] top-0 bg-black/50 z-50 flex justify-center items-center`}
        >
          <div
            className={`p-3 flex flex-col justify-center items-center z-50 h-[10em] W-[80%] md:w-[30%] toast-border border-stone-300 rounded-xl bg-stone-200 dark:bg-darkBg text-stone-900 dark:text-stone-200`}
          >
            <div className="w-[100%] text-center">
              <p className="text-bold">
                Are you sure you want to remove this Job from bookmarks?
              </p>
            </div>
            <div className="mt-2">
              <button
                className="modal-btn rounded-xl"
                value="cancel"
                onClick={() => handleClick("cancel")}
              >
                cancel
              </button>
              <button
                className="modal-btn rounded-xl"
                value="yes"
                onClick={() => handleClick("yes")}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




// former functions
// if (value === "cancel") {
//   dispatch({ type: "PROMPT_USER", payload: !bookmarkModal });
// } else if (value === "yes" && jobs) {
//   const { jobs } = getJobs();

//   let filteredJobs = jobs.filter((item) => item.id !== jobId);
//     let stringJobs = JSON.stringify(filteredJobs)

//   console.log(filteredJobs.length);
//   if (filteredJobs.length < 1) {
//     localStorage.removeItem("jobsSaved");
//   } else {
//     localStorage.setItem("jobsSaved", stringJobs);
//   }

//   // removeJob(jobId)
//   // console.log(jobId)
//   // console.log("deleted")
//   dispatch({ type: "PROMPT_USER", payload: !bookmarkModal });
// }
// // else if (value === "yes" && jobs.length < 0){
// // }
// const jobs = JSON.parse(localStorage.getItem("jobsSaved"));
