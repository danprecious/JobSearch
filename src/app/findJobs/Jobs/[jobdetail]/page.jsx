"use client";

import { useParams } from "next/navigation";
import { jobs } from "@/utils/dataModel";
import Link from "next/link";
import JobDetail from "@/components/JobDetails";

export const JobDetailDisplay = () => {
  const params = useParams();
  const paramsId = decodeURIComponent(parameters.jobdetail);

  return (
    <div>
      {parametersId ? (
        <JobDetail paramsId={paramsId} />
      ) : (
        <div className="flex justify-center items-center">
          <h2>Select a Job to see full details</h2>
        </div>
      )}
    </div>
  );
};

