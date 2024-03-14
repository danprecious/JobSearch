import Card from '@/components/cards';
import { GetPost } from '@/utils/apiCall';
import React from 'react'
import { jobs } from '@/utils/dataModel';

const JobsListing = async () => {

  return (
    <div className='md:w-[50%] rounded-3xl py-3 px-3 dark:bg-black bg-lightBg'>
      {/* <h1 className='sectionH1 font-bold text-zinc-700 '>Jobs Listing</h1> */}
      <div className=''>
        {jobs.map((job) => {
          return (
            <Card key ={job.id} job={job}/>
          )
        })}
      </div>
    </div>
  )
}

export default JobsListing;
